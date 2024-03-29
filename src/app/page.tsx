'use client';

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="heading-1">CSS を記述して見た目を装飾しよう！</h1>
      <p className="lead-text">CSS を使用することで自由なデザインを適用できる！</p>
      <p className="description">
        CSS を使用することで文字サイズの変更や太字などの簡単な装飾はもちろん、複雑なレイアウトを表現することができます。
        <br />
        非常に多くの設定をすることが可能となっているため、すべてを紹介するのは不可能です。
        <br />
        今回は代表的な設定方法や基本的な知識の紹介にとどまりますが、
        <br />
        自分がよく利用するサイトや好きなデザインのサイトがどのような CSS 設定をしているのかを積極的に確認し、
        <br />
        真似をしてみて表現力を高めていきましょう！
      </p>

      <section className="section">
        <h2 className="heading-2">CSSの基本: テキストに様々な装飾をしてみよう</h2>
        <p className="description">
          CSS を設定することでテキストに様々な装飾をすることができます。
          <br />
          代表的な装飾方法を実装してみて体験してみましょう
        </p>
        <div className="color-red">赤色のテキストにしてみましょう</div>
        <div className="color-blue">青色のテキストにしてみましょう</div>
        <div className="color-green">緑色のテキストをカラーコード #4daf50 で設定してみましょう</div>
        <div className="font-bold">太字のテキストにしてみましょう</div>
        <div className="font-size-large-px">大きな文字サイズを px 単位で設定してみましょう</div>
        <div className="font-size-small-px">小さな文字サイズを px 単位で設定してみましょう</div>
        <div className="font-size-large-em">大きな文字サイズを em 単位で設定してみましょう</div>
        <div className="font-size-small-em">小さな文字サイズを em 単位で設定してみましょう</div>
        <div className="font-size-large-per">大きな文字サイズを % 単位で設定してみましょう</div>
        <div className="font-size-small-per">小さな文字サイズを % 単位で設定してみましょう</div>
        <div className="text-underline">テキストに下線を設定してみましょう</div>
        <div className="text-strikethrough">テキストに取り消し線を設定してみましょう</div>
      </section>

      <section className="section">
        <h2 className="heading-2">CSSの基本: 背景色と余白 (margin/padding) の概念を知ろう</h2>
        <p className="description">
          テキストだけではなく、もちろん背景色を設定することも可能です。
          <br />
          また、余白の概念も合わせて理解することで、より美しいデザインを表現することができます。
        </p>
        <div className="background-red">赤色の背景にしてみましょう</div>
        <div className="background-blue">青色の背景にしてみましょう</div>
        <div className="background-green">緑色の背景をカラーコード #4daf50 で設定してみましょう</div>
        <div className="background-red-margin">赤色の背景に margin 余白を設定してみましょう</div>
        <div className="background-blue-margin">青色の背景に margin 余白を設定してみましょう</div>
        <div className="background-green-margin">緑色の背景に margin 余白を設定してみましょう</div>
        <div className="background-red-padding">赤色の背景に padding 余白を設定してみましょう</div>
        <div className="background-blue-padding">青色の背景に padding 余白を設定してみましょう</div>
        <div className="background-green-padding">緑色の背景に padding 余白を設定してみましょう</div>
        <div className="background-red-margin-padding">赤色の背景に marigin と padding の両方を設定してみましょう</div>
        <div className="background-blue-margin-padding">青色の背景に marigin と padding の両方を設定してみましょう</div>
        <div className="background-green-margin-padding">
          緑色の背景に marigin と padding の両方を設定してみましょう
        </div>
        <div className="background-image">画像を背景に設定してみましょう</div>
      </section>

      <section className="section">
        <h2 className="heading-2">CSSの基本: 要素を横並びにしてみよう</h2>
        <p className="description">
          HTML要素は基本的に縦積みで表示されますが、 flex プロパティを使用することで横並びにすることができます。
          <br />
          横並びにする手法は他にも多くありますが、近年では flex
          プロパティが最も直感的に設定ができるため利用されています。
          <br />
          かなり細かい設定ができたりと奥が深く使いこなすのが少々難しいですが、今回は一番基本的な使い方を紹介します。
          <br />
          <a href="https://developer.mozilla.org/ja/docs/Web/CSS/flex" target="_blank" rel="noopener noreferrer">
            参考
          </a>
        </p>
        <div className="flex-container">
          <div className="flex-item">要素1</div>
          <div className="flex-item">要素2</div>
          <div className="flex-item">要素3</div>
        </div>
        <div className="flex-container-right">
          <div className="flex-item">右寄せ要素1</div>
          <div className="flex-item">右寄せ要素2</div>
          <div className="flex-item">右寄せ要素3</div>
        </div>
        <div className="flex-container-reverse">
          <div className="flex-item">逆順要素1</div>
          <div className="flex-item">逆順要素2</div>
          <div className="flex-item">逆順要素3</div>
        </div>
        <div className="flex-container-gap">
          <div className="flex-item">余白あり要素1</div>
          <div className="flex-item">余白あり要素2</div>
          <div className="flex-item">余白あり要素3</div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-2">CSSの基本: position で要素を自由に配置しよう</h2>
        <p className="description">
          position 要素を使用することで、要素を自由に配置することができます。
          <br />
          「要素を自由に配置できる」と聞くと非常に便利な機能のように感じますが、
          <br />
          配置する位置を細かく設定する必要があるため、汎用性が低いというデメリットもあります。
          <br />
          使い方が難しいものになりますが、概念や原理をきちんと理解できると非常に複雑なレイアウトを表現することも可能となるため、
          <br />
          基本的な概念を体験してみましょう
          <br />
          <a href="https://developer.mozilla.org/ja/docs/Web/CSS/position" target="_blank" rel="noopener noreferrer">
            参考
          </a>
        </p>
        <div className="position-relative">relative 要素は単独では何も変化はありません</div>
        <div className="position-absolute">absolute 要素</div>
        <div className="position-relative-parent">
          <div className="position-parent">
            <div className="position-absolute-child">absolute 要素</div>
            <p>
              absolute 要素は親要素をたどっていき、直近で一番近い relative 要素を探し、そこを起点として位置を決めます。
              <br />
              そのため、単体で使用してしまうと relative 要素が見つからず、一番外側の要素 (body 要素)
              を基準として位置が決まります。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
