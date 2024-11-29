import { intersection } from 'lodash';
import Forbidden from 'jscommons/dist/errors/Forbidden';
import Agent from '../../models/Agent';
import { XAPI_STATE_MINE } from '../../utils/scopes';

export default (
  fullAccessScopes: string[],
  scopes: string[],
  agent: Agent,
  authorityId?: string,
) => {
  const allowedScopes = intersection(fullAccessScopes, scopes);
  if (allowedScopes.length > 0) {
    return;
  }
  if (scopes.includes(XAPI_STATE_MINE)) {
    if (authorityId === agent?.account?.name) {
      return;
    }
  }

  throw new Forbidden();
};
