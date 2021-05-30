import React, {useState} from 'react';
import Modal from '../Components/oraganism/Modal/Modal';
import Label from '../Components/atom/Label/Label';
import Input from '../Components/atom/Input/Input';
import FormItem from "../Components/molecule/FormItem";

const Home = () => {

	const [modal, setModal] = useState<boolean>(false);

	return (
		<div>
			<button
				onClick={() => setModal(true)}
			>

			</button>
			<Modal
				open={modal}
				close={() => setModal(!modal)}
				modalTitle="로그인"
			>
				<FormItem
					labelTag="email"
					placeholder="email"
				>
					Email
				</FormItem>
				<FormItem
					labelTag="password"
					placeholder="password"
				>
					Password
				</FormItem>
			</Modal>
		</div>
	);
};

export default Home;