# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##　備忘録
1.DOM の型、プロパティなどが分からないときは以下の DOM ライブラリを参照すること
./node_modules/typescript/lib/lib.dom.d.ts

2.FC の props について
コンポーネントを関数を用いて作成する際に、Function Component（FC）を利用する。
javaScript では型定義が props について不要であるが、typeScript では必要となる。
例えば次のスクリプトでは console でエラーとなる。理由は props にプロパティ dog が含まれいることを確認できないためである。
export const aaa: React.FC = (props) => {
console.log(props.dog)
}

typeScript では FC にジェネリクスに型を定義すれば props の型として認識される。
※引数に型を定義する必要なし。
type Props = {
dog:string
}
export const Todo: React.FC<Props> = (props) => {
console.log(props.dog)
};

3.空のオブジェクト
返却値なしの関数を型定義したいとき。{}は空オブジェクトとなるので void との記述間違いに注意。
type={
function1:()=> void
}

4.イベントハンドラで引数を使用する。
下記の記述ではエラーとなる。理由は click 関数を実行を意味するからである。{}の中には関数（オブジェクト）を記述するルールである。
<button onClick={click(1)}>One</div>

以下の方法で引数を含めた関数を登録できる。
アロー関数を利用
<button onClick={()=>click(1)}>One</div>
bind 関数を利用（第一引数を null に指定すると自信が this として関数が生成される。）
<button onClick={click.bind(null,1)}>One</div>

typescript ではアロー関数の利用が一般的

Reference
https://www.cresco.co.jp/blog/entry/18971/
