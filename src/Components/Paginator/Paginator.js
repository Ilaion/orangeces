import React, {useState} from "react";
import mod from "./Paginator.module.css";
import cn from "classnames";

let Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    let rightPortionBorder = (portionNumber * portionSize);

    return (
            <div className={mod.allPages}>
                {portionNumber > 1 &&
                <span className={mod.arrow} onClick={() => {setPortionNumber(portionNumber-1)}}>{`<-`}</span>}
                {pages
                    .filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                    .map((p) => {
                    return <span className={cn ({ [mod.selectedPage]: props.currentPage === p},  mod.pageNumber)}
                                 key={p}
                                 onClick={() => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
                {portionCount > portionNumber &&
                <span className={mod.arrow} onClick={() => { setPortionNumber((portionNumber + 1))}}>{`->`}</span>}
            </div>
    )
}

export default Paginator;