import Agent from '../../models/Agent';
import { STATE_WRITE_SCOPES } from '../../utils/scopes';
import checkStateScopes from './checkStateScopes';

export default (scopes: string[], agent: Agent, authorityId?: string) => {
  checkStateScopes(STATE_WRITE_SCOPES, scopes, agent, authorityId);
};
