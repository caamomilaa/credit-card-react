import { FORM_VALIDATIONS } from '../../constants/formValidation';

const CardForm = ({ handleSubmit, register, errors }) => {
	return (
		<>
			<form onSubmit={handleSubmit()}>
				<div>
					<label htmlFor='name'>Cardholder Name</label>
					<input
						type='text'
						id='name'
						placeholder='e.g. Jane Appleseed'
						{...register('name', FORM_VALIDATIONS.NAME)}
					/>
					{<span>{errors?.name?.message}</span>}
				</div>
				<div>
					<label htmlFor='number'>Card Number</label>
					<input
						type='text'
						id='number'
						placeholder='e.g. 1234 5678 9123 0000'
						{...register('number', FORM_VALIDATIONS.NUMBER)}
					/>
					{<span>{errors?.number?.message}</span>}
				</div>
				<div>
					<label htmlFor='mm'>Exp. Date (MM/YY)</label>
					<label htmlFor='cvc'>Card Number</label>
					<div>
						<input
							maxLength={2}
							type='text'
							id='mm'
							placeholder='MM'
							{...register('mm', FORM_VALIDATIONS.NUMBER)}
						/>
						{<span>{errors?.mm?.message}</span>}
						<input
							maxLength={2}
							type='text'
							id='yy'
							placeholder='YY'
							{...register('yy', FORM_VALIDATIONS.NUMBER)}
						/>
						{<span>{errors?.yy?.message}</span>}
						<input
							maxLength={3}
							type='text'
							id='cvc'
							placeholder='e.g. 123'
							{...register('cvc', FORM_VALIDATIONS.NUMBER)}
						/>
						{<span>{errors?.cvc?.message}</span>}
					</div>
				</div>
				sub
				<input type='submit' value='Confirm' />
			</form>
		</>
	);
};
export default CardForm;
