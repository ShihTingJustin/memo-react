const Edit = () => {
    return <div>
        <h1>備忘錄</h1>
        <p>記事：</p>
        <input type="text"></input>
        <p>日期：</p>
        <input type="date"></input>
        <p>時間：</p>
        <input type="time"></input>
        <button className="add">新增</button>
    </div>
}

export default Edit