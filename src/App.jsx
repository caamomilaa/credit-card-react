import CreditCard from './components/credit-card/CreditCard';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<body>
				<main>
					<GlobalStyles />
					<CreditCard />
				</main>
			</body>
		</>
	);
};

export default App;
