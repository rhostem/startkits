import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { Actions as TodoActions } from './todo/todoActions';

export type ReactRouterAction = RouterAction | LocationChangeAction;

type RootAction = ReactRouterAction | TodoActions[keyof TodoActions];

export default RootAction;
