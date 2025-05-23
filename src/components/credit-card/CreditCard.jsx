import { useForm } from 'react-hook-form';
import CardForm from '../card-form/CardForm';
import CardImage from '../card-img/CardImage';

const CreditCard = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		watch
	} = useForm({ mode: 'onBlur' }); //dejo el estado en el papá, para trasladar la info del form a las imagenes

	const info = watch(); //vigilo lo del form y traslado la info. No es necesario ponerlo directamente en elform, porque el register es el que guarda los datos en el use form que hay aquí. WATCH ES UN MÉTODO SEGUN DOCUMENTACION

	return (
		<>
			<CardImage info={info} />
			<CardForm
				handleSubmit={handleSubmit}
				errors={errors}
				register={register} //en register guardo los datos recogidos en los campos del form
			/>
		</>
	);
};

export default CreditCard;
