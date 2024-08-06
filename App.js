const anotherDiv = React.createElement("div", { id: "div" }, [
    React.createElement(
        "h1",
        { id: "heading" },
        "Hello World from React but from separate js file"
    ),
    React.createElement(
        "h2",
        { id: "heading2" },
        "Hi World from React but from separate js file"
    ),
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(anotherDiv);
