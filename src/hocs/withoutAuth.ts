import { useIsAuthenticated } from '@contexts/AuthContext';
import withConditionalRedirect from './withConditionalRedirect';

/**
 * Require the user to be unauthenticated in order to render the component.
 * If the user is authenticated, forward to the given URL.
 */
export default function withoutAuth(WrappedComponent: any, location = '/') {
  return withConditionalRedirect({
    WrappedComponent,
    location,
    clientCondition: function withoutAuthClientCondition() {
      return useIsAuthenticated();
    },
    serverCondition: function withoutAuthServerCondition(ctx: any) {
      return !!ctx.req?.cookies.token;
    },
  });
}
