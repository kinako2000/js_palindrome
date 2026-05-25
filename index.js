module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    // パリンドロームのテスト用に変換した訳文を返す
    this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
    }
// コンテンツの文字だけを返す
// 利用例:
//   new Phrase("Hello, world!").letters() === "Helloworld"

/*this.letters = function letters() {
  return (this.content.match(/[a-z]/gi) || []).join("");
}*/
this.letters = function letters() {
  const lettersRegEx = /[a-z]/gi;
  return (this.content.match(lettersRegEx) || []).join("");
}



/* . Array.fromで配列作りforEachでループ
this.letters = function letters() {
  let theLetters = [];
  const letterRegex = /[a-z]/i;
  Array.from(this.content).forEach(
    function(character) {
      if (character.match(letterRegex)){
        theLetters.push(character);
      }
    }
  );
  return theLetters.join("");
}*/

/* for文使用
this.letters = function letters() {
      let theLetters = [];
      for (let i = 0; i < this.content.length; i++) {
        if (this.content.charAt(i).match(/[a-zA-Z]/)) {
          theLetters.push(this.content.charAt(i));
        }
      }
      return theLetters.join("");
    }
*/
  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
  return this.processedContent() === this.processedContent().reverse();
  }
}
