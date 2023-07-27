import { UserRole, getUserAuthData, getUserRoles } from "entities/User";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config";
import { RequireAuth } from "./RequireAuth";

interface RequireRolesProps {
  children: JSX.Element;
  roles: UserRole[];
}

export function RequireRoles({ children, roles }: RequireRolesProps) {
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);
  const auth = useSelector(getUserAuthData);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return <RequireAuth>{children}</RequireAuth>;
}
