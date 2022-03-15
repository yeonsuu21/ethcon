window.onload = function () {
  var myform1 = document.getElementById("my_form_17");
  myform1.onsubmit = function () {
    var code_check1 = document.getElementById("code17").value;
    if (code_check1 == `contract Ballot\{`) {
      alert("정답입니다.");
    }
  };

  var myform2 = document.getElementById("my_form_18");
  myform2.onsubmit = function () {
    var code_check2 = document.getElementById("code18").value;
    if (code_check2 == `struct Voter\{`) {
      alert("정답입니다.");
    }
  };

  var myform3 = document.getElementById("my_form_19");
  myform3.onsubmit = function () {
    var code_check3 = document.getElementById("code19").value;
    if (code_check3 == `function Ballot`) {
      alert("정답입니다.");
    }
  };

  var myform4 = document.getElementById("my_form_20");
  myform4.onsubmit = function () {
    var code_check4 = document.getElementById("code20").value;
    if (code_check4 == `if \(delegate_voted\)\{`) {
      alert("정답입니다.");
    }
  };

  var myform5 = document.getElementById("my_form_21");
  myform5.onsubmit = function () {
    var code_check5 = document.getElementById("code21").value;
    if (code_check5 == `sender.voted = true;`) {
      alert("정답입니다.");
    }
  };

  var myform6 = document.getElementById("my_form_13");
  myform6.onsubmit = function () {
    var code_check6 = document.getElementById("code13").value;
    if (code_check6 == `contract SimpleAuction\{`) {
      alert("정답입니다.");
    }
  };

  var myform7 = document.getElementById("my_form_14");
  myform7.onsubmit = function () {
    var code_check7 = document.getElementById("code14").value;
    if (code_check7 == `function SimpleAuction\(`) {
      alert("정답입니다.");
    }
  };

  var myform8 = document.getElementById("my_form_15");
  myform8.onsubmit = function () {
    var code_check8 = document.getElementById("code15").value;
    if (code_check8 == `function withdraw\(\)`) {
      alert("정답입니다.");
    }
  };

  var myform9 = document.getElementById("my_form_16");
  myform9.onsubmit = function () {
    var code_check9 = document.getElementById("code16").value;
    if (code_check9 == `function auctionEnd\(\) public \{`) {
      alert("정답입니다.");
    }
  };

  var myform10 = document.getElementById("my_form_9");
  myform10.onsubmit = function () {
    var code_check10 = document.getElementById("code9").value;
    if (code_check10 == `contract BlindAuction\{\n    struct Bid\{`) {
      alert("정답입니다.");
    }
  };

  var myform11 = document.getElementById("my_form_10");
  myform11.onsubmit = function () {
    var code_check11 = document.getElementById("code10").value;
    if (code_check11 == `function BlindAuction\(`) {
      alert("정답입니다.");
    }
  };

  var myform12 = document.getElementById("my_form_11");
  myform12.onsubmit = function () {
    var code_check12 = document.getElementById("code11").value;
    if (code_check12 == `refund += bid.deposit;`) {
      alert("정답입니다.");
    }
  };

  var myform13 = document.getElementById("my_form_12");
  myform13.onsubmit = function () {
    var code_check13 = document.getElementById("code12").value;
    if (code_check13 == `function withdraw\(\) public\{`) {
      alert("정답입니다.");
    }
  };

  var myform15 = document.getElementById("my_form_5");
  myform15.onsubmit = function () {
    var code_check15 = document.getElementById("code2").value;
    if (
      code_check15 ==
      `function confirmPurchase\(\)\npublic\ninState\(State.Created\)\ncondition\(msg.value == \(2 * value\)\)\npayable\n\{\nemit PurchaseConfirmed\(\);\nbuyer = msg.sender;\nstate = State.Locked;\n\}`
    ) {
      alert("정답입니다.");
    }
  };
  var myform14 = document.getElementById("my_form_4");
  myform14.onsubmit = function () {
    var code_check14 = document.getElementById("code1").value;
    if (code_check14 == `state = State.Release;\nbuyer.transfer\(value\);`) {
      alert("정답입니다.");
    }
  };

  var myform16 = document.getElementById("my_form_6");
  myform16.onsubmit = function () {
    var code_check16 = document.getElementById("code3").value;
    if (code_check16 == `require\(msg.sender == owner\);\nselfdestruct\(msg.sender\);`) {
      alert("정답입니다.");
    }
  };

  var myform17 = document.getElementById("my_form_7");
  myform17.onsubmit = function () {
    var code_check17 = document.getElementById("code4").value;
    if (code_check17 == `r := mload\(add\(sig, 32\)\)`) {
      alert("정답입니다.");
    }
  };

  var myform18 = document.getElementById("my_form_8");
  myform18.onsubmit = function () {
    var code_check18 = document.getElementById("code5").value;
    if (
      code_check18 ==
      `require\(msg.sender == recipient\);\nrequire\(isValidSignature\(amount, signature\)\);\nrecipient.transfer\(amount\);\nselfdestruct\(sender\);`
    ) {
      alert("정답입니다.");
    }
  };

  var myform19 = document.getElementById("my_form_9");
  myform19.onsubmit = function () {
    var code_check19 = document.getElementById("code6").value;
    if (code_check19 == `require\(block.timestamp >= expiration\);\nselfdestruct\(sender\);`) {
      alert("정답입니다.");
    }
  };

  var myform20 = document.getElementById("my_form_10");
  myform20.onsubmit = function () {
    var code_check20 = document.getElementById("code7").value;
    if (code_check20 == `\(uint8 v, bytes32 r, bytes32 s\) = splitSignature\(sig\)`) {
      alert("정답입니다.");
    }
  };
};
