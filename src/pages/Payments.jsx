import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaymentList from "../components/PaymentList/PaymentList";
import { getPayments } from "../payments-api";
import OwnerSearchForm from "../components/OwnerSearchForm";

export default function Payments() {
  // const location = useLocation();
  // console.log("Payments", location);

  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  const [params] = useSearchParams();
  const owner = params.get("owner") ?? "";

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPayments(owner);
        console.log(data);
        if (data.length === 0) {
          return setError(true);
        }
        setPayments(data);
      } catch (error) {
        console.log("error", { error });
        return setError(true);
      }
    }

    fetchData();
  }, [owner]);

  return (
    <div>
      <h1>Payments page</h1>
      <OwnerSearchForm />
      {payments.length > 0 && !error ? (
        <PaymentList payments={payments} />
      ) : (
        <p style={{ color: "red" }}>Not found</p>
      )}
      {/* {error && <p style={{ color: "red" }}>Dsdsdsad</p>} */}
    </div>
  );
}
