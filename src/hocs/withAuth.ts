import { useIsAuthenticated } from '@contexts/AuthContext';
import withConditionalRedirect from './withConditionalRedirect';
/**
 * Require the user to be authenticated in order to render the component.
 * If the user isn't authenticated, forward to the given URL.
 */
export default function withAuth(WrappedComponent: any, location = '/login') {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withAuthClientCondition() {
      return !useIsAuthenticated();
    },
    serverCondition: function withAuthServerCondition(ctx: any) {
      return !ctx.req?.cookies.token;
    },
  });
}
