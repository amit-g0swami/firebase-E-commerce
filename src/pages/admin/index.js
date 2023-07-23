import { useState } from "react";
import { withAdminOnly } from "../../utils/withAdminOnly";
import { ShowUsers } from "../../components/admin/ShowUsers";
import { ShowProduct } from "../../components/admin/ShowProduct";
import { AdminBar } from "../../components/admin/AdminBar";

const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTable, setActiveTable] = useState(null);
  return (
    <div>
      <AdminBar
        setActiveTable={setActiveTable}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        setProducts={setProducts}
        setUsers={setUsers}
      />
      {activeTable === "products" && products.length > 0 && (
        <ShowProduct products={products} />
      )}
      {activeTable === "users" && users.length > 0 && (
        <ShowUsers users={users} />
      )}
    </div>
  );
};

export default withAdminOnly(Admin);