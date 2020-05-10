import React, { useState, useEffect } from "react";

export interface Props {}

export const Main: React.FC<Props> = () => {
    const title = 'Welcome to MonoRepos';
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{title}:: {count}</h1>
        </div>
    )
}

//EXPORT LIBRARY COMPONENTS IN BELOW FILE
export * from './lib/components';