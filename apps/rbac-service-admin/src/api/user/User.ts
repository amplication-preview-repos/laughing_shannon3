import { Role } from "../role/Role";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: Role | null;
  roles: JsonValue;
  systemRole?: "Option1" | null;
  updatedAt: Date;
  username: string;
};
