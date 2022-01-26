import { useState } from "react";
import { createContext, useEffect } from "react";

const DUMMY = {
  id: 1,
  email: "email@test.com",
  phone: "9991436349",
  full_name: "Nelson Jhoan Concha Canto",
  birthdate: new Date(),
  status: "PENDIENTE",
  analyst_name: "Pedro",
  card: {
    card_number: "",
    brand: "",
    cvv: "",
    pin: "",
    expiration_date: "",
  },
};

export const UserPageContext = createContext(undefined);

export const UserPageProvider = ({ children, isAdd }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAdd) {
      getUser();
    }
  }, [isAdd]);

  const getUser = () => {
    setUser(DUMMY);
  };

  const onSubmit = (user, isAdd) => {};

  const contextValue = {
    user,
    isAdd,
    loading,
    onSubmit,
  };

  return (
    <UserPageContext.Provider value={contextValue}>
      {children}
    </UserPageContext.Provider>
  );
};
