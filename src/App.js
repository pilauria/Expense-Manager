import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transanction from './components/Transanction';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <Transanction />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
