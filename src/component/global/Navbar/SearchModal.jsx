import { useState } from "react";
import CustomModal from "../Modal/CustomModal";

const SearchModal = () => {
	const [open, setOpen] = useState(false);

	return (
		<CustomModal
			open={open}
			setOpen={setOpen}
			className={"max-w-[760px]"}
		></CustomModal>
	);
};

export default SearchModal;
