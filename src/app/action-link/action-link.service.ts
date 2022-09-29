import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ParamMap } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/** ActionLink optional data */
export interface ActionData { 
  
  // Optional parameters
  [key: string]: string; 

  /** The activated action code */
  action: string;
};

/** ActionLink result returned by the ActionLinkExecuter */
export type ActionResult<T = any> = void|T|Promise<T>|Observable<T>;

/** Actinng as a CanActivate guard to intercept routing actions */
@Injectable({ providedIn: 'root' })
export class ActionLinkObserver implements CanActivate {

  private observers$ = new Subject<ActionData>();
  // Implements single route user authentication guarding
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // Computes the action code from the route data
    const action = route.data.actionMatch || route.routeConfig.path;
    // Pushes the request using data coming from the route
    this.activate( this.extract(route.queryParamMap, action) );
    // Always prevents the real routing
    return false;
  }

  public activate(data: ActionData) {

    this.observers$.next( data );
  }

  /** Register the observer returning the observable emitting on the specified action(s) */
  public register(...actions: string[]): Observable<ActionData> {

    // Filters the request based on the action code
    return this.observers$.pipe( filter( data =>  actions.some( action => action === data.action ) ) );
  }

  /** Turns a ParamMap into an object */
  private extract(params: ParamMap, action: string): ActionData {
    // Skips when no params are present
    if(!params || params.keys.length <= 0) { return { action }; }
    // Reduces the keys arrayn into the resulting object
    return params.keys.reduce( (obj, key) => {
      // Adds the single key, value pair
      obj[key] = params.get(key);
      return obj;
    }, { action } );
  }
}