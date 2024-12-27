import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ElectronicsSectionIndex = () => {
  const [catalogues, setCatalogues] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_ECOMMERCE_ADMIN_API;

  const fetchCatalogues = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/electronics-section`);
      const data = await response.json();
      if (data.success) {
        setCatalogues(data.results);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch catalogues");
    } finally {
      setLoading(false);
    }
  };

  const deleteCatalogue = async (id) => {
    if (!window.confirm("Are you sure you want to delete this catalogue?"))
      return;

    try {
      const response = await fetch(`${apiUrl}/api/electronics-section/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Catalogue deleted successfully");
        setCatalogues((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to delete catalogue");
    }
  };

  useEffect(() => {
    fetchCatalogues();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Electronics Sections</h2>
        <Link to="/electronics-section/create" className="btn btn-primary">
          Create New
        </Link>
      </div>

      {catalogues.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Catagory Name</th>
                <th>Catalogue Count</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {catalogues.map((catalogue, index) => (
                <tr key={catalogue._id}>
                  <td>{index + 1}</td>
                  <td>{catalogue.section_name}</td>
                  <td>{catalogue.items?.length || 0}</td>
                  <td>{new Date(catalogue.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link
                      to={`/electronics-section/${catalogue._id}`}
                      className="btn btn-sm btn-info me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCatalogue(catalogue._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <p>No catalogues found.</p>
        </div>
      )}
    </div>
  );
};

export default ElectronicsSectionIndex;
