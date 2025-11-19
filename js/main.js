$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".hum").on("click", function () {
        if ($("#header").hasClass("open")) {
            $("#header").removeClass("open");
        } else {
            $("#header").addClass("open");
        }
        // /* ハンバーガーメニュー使用時に画面をロックするための指定 */
        if ($("body").css("overflow") === "hidden") {
            $("body").css({ height: "", overflow: "" });
        } else {
            $("body").css({ height: "100%", overflow: "hidden" });
        }
    });
});

//------------------------------------------------------------
// /* ハンバーガーメニュー使用時に画面をロックするための指定 */
//------------------------------------------------------------
// $(function () {
//     $(".hum").click(function () {
//         if ($("body").css("overflow") === "hidden") {
//             $("body").css({ height: "", overflow: "" });
//         } else {
//             $("body").css({ height: "100%", overflow: "hidden" });
//         }
//     });
// });

/*=================================================
スクロールしたらヘッダーの表示幅変更
===================================================*/

const ob_func = (entries) => {
    const big = document.querySelector("header");
    for (entry of entries) {
        if (entry.isIntersecting) {
            big.classList.add("on");
            big.classList.remove("off");
        } else {
            big.classList.remove("on");
            big.classList.add("off");
        }
    }
};
const ob_param = {
    rootMargin: "-70px",
};
const ob = new IntersectionObserver(ob_func, ob_param);
ob.observe(document.querySelector(".observer"));

/*=================================================
スクロールしたらふわっと表示
===================================================*/
const targets = document.getElementsByClassName("fade");
for (let i = targets.length; i--; ) {
    let observer = new IntersectionObserver((entries, observer) => {
        for (let j = entries.length; j--; ) {
            if (entries[j].isIntersecting) {
                entries[j].target.classList.add("active");
                observer.unobserve(entries[j].target);
            }
        }
    });
    observer.observe(targets[i]);
}

// *************************************
