import React from 'react';

type PropsType = {
    currentMoney: MoneyType[],
    onClickFilterHandler:(name: string) => void
}

type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}

export const NewComponent = (props: PropsType) => {
    function getName(name: string) {
        props.onClickFilterHandler(name)
    }

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{ marginLeft: '35px' }}>
                <button onClick={() => getName('all')}>all</button>
                <button onClick={() => getName('ruble')}>rubles</button>
                <button onClick={() => getName("dollar")}>dollars</button>
            </div>
        </>
    );
};