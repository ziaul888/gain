import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }) => {
	const router = useRouter();

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setChecked(true)
		} else {
			router.push("/auth/login");
		}
	}, [router]);

   if(!checked){
	  return null
   }
	return <>{children}</>;
};

export default AuthLayout;
