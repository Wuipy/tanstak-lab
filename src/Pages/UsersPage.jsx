import UsersList from "../Components/UsersList";
import AddUserButton from "../Components/AddUserButton";

const UsersPage = () => {
  return (
    <div className="p-4">
      <AddUserButton />
      <UsersList />
    </div>
  );
};

export default UsersPage;
