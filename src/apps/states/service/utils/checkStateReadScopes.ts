import Agent from '../../models/Agent';
import { STATE_READ_SCOPES } from '../../utils/scopes';
import checkStateScopes from './checkStateScopes';

export default (scopes: string[], agent: Agent, authorityId?: string) => {
  checkStateScopes(STATE_READ_SCOPES, scopes, agent, authorityId);
};
