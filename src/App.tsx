import React, { useState } from 'react';
import './App.css';
import { NewComponent } from './NewComponent';

type FilterType = string

function App() {
    const [money] = useState([
        { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
        { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
        { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        console.log(filter)
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar');
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        console.log(nameButton)
        setFilter(nameButton)
    }

    return (
        <>
            <div>Dev</div>
            <p>Lorem
            <p>Lorem
            </p>

            </p>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={(name) => onClickFilterHandler(name)}/>
        </>
    );
}

export default App;


// function App() {
// const Button1Foo = (subscriber: string, age: number) => {
//   console.log(subscriber, age)
// }

// const Button2Foo = (subscriber: string, age: number) => {
//   console.log(subscriber, age)
// }

// const Button3Foo = () => {
//   console.log(`I'm stupid button`)
// }


// return (
//   <>
//     <div className={"App"}>

//       {/* <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo(`I'm Vasya`, 21)} />
//       <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo(`I'm Ivan`, 21)} />
//       <Button name={"MyYouTubeChanel-3"} callBack={() => Button3Foo()} /> */}
//     </div>
//   </>
// )
// }

// export default App;