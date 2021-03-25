import styles from './search_header.module.css'
import React, { memo, useRef } from 'react';

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }

    const onKeyPress = event => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    return(
    <header className={styles.header}>
        <div className={styles.tab}>
        <img className={styles.img}src="/img/logo.png"></img>
        <h1 className={styles.title}>Youtube</h1>

        </div>
        
   <input ref={inputRef} className={styles.input} type="search" placeholder="...search" onKeyPress={onKeyPress}/>
    <button className={styles.button}type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/img/search.png"></img>
    </button>
</header>
    );

})
export default SearchHeader;