import { useState } from "react";

export default function FontSizeChanger() {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => setFontSize(fontSize + 1);
    const decreaseFontSize = () => setFontSize(fontSize - 1);

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ fontSize: `${fontSize}px` }}>
                Este é um texto com tamanho ajustável.
            </div>
            <button onClick={increaseFontSize} style={{ margin: "5px" }}>
                Aumentar
            </button>
            <button onClick={decreaseFontSize} style={{ margin: "5px" }}>
                Diminuir
            </button>
        </div>
    );
}