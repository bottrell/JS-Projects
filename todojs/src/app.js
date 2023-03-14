const app = (() => {
    const mainDiv = document.getElementById("main");

    //creates a default app
    const createApp = () => {
        let sideBar = document.createElement("div");
        sideBar.setAttribute("id", "sidebar");
        sideBar.innerHTML = "sideBar";
        let itemList = document.createElement("div");
        itemList.setAttribute("id", "itemList");
        itemList.innerHTML = "itemList";

        let inputDiv = document.createElement("div");
        inputDiv.setAttribute("id", "inputArea");
        itemList.append(inputDiv);

        let inputForm = document.createElement("form");
        inputForm.setAttribute("id", "inputForm");
        inputDiv.append(inputForm);

        let inputArea = document.createElement("input");
        inputArea.setAttribute("id", "inputText");
        inputArea.innerHTML = "Enter TODO";
        inputForm.append(inputArea);

        let submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");
        inputForm.append(submitButton);

        let suggested = document.createElement("div");
        suggested.setAttribute("id", "suggested");
        suggested.innerHTML = "suggested";

        mainDiv.append(sideBar, itemList, suggested);
    }

    const resetApp = () => {
        let sideBar = document.getElementById("sidebar");
        let itemList = document.getElementById("itemList");
        for (let node of sideBar.children) {
            sideBar.removeChild(node);
        }
        for (let node of itemList.children) {
            sideBar.removeChild(node);
        }
    }


    const addTodo = (text) => {

    }

    return { createApp, resetApp };
})();

export { app };
