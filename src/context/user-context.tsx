import toast from "react-hot-toast";
import { User, UsersContextProps } from "@/types/general";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

const Context = createContext<UsersContextProps | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await (await fetch("/api/get-users")).json();

        setUsers(res.users);
      } catch (error) {
        console.error("A:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const updateUserState = (userId: string, newState: string) => {
    setUsers((k) =>
      k.map((u) => (u.id === userId ? { ...u, status: newState } : u))
    );
  };

  const activateUser = (userId: string) => {
    updateUserState(userId, "active");
    toast.success("User activated successfully!");
  };

  const blacklistUser = (userId: string) => {
    updateUserState(userId, "blacklisted");
    toast.success("User blacklisted successfully!");
  };

  const deactivateUser = (userId: string) => {
    updateUserState(userId, "inactive");
    toast.success("User deactivated successfully!");
  };

  const stats = useMemo(() => {
    const totalUsers = users.length;
    const usersWithLoans = users.filter(
      (user) => user.loanRepayment > 0
    ).length;
    const usersWithSavings = users.filter((user) => user.savings > 0).length;
    const activeUsers = users.filter((user) => user.status === "active").length;

    return { totalUsers, activeUsers, usersWithLoans, usersWithSavings };
  }, [users]);

  const uniqueOrganizations = useMemo(() => {
    const uniqueOrgs = Array.from(
      new Set(users.map((user) => user.organization))
    );

    return uniqueOrgs.map((org) => ({ label: org, value: org }));
  }, [users]);

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        activateUser,
        blacklistUser,
        deactivateUser,
        stats,
        loading,
        uniqueOrganizations,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(Context);

  if (!context) throw new Error("useUsers must be used within a UsersProvider");

  return context;
};
