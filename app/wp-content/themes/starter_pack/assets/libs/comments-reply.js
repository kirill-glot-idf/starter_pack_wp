window.addComment = function (s) {
  var u, f, v, y = s.document, p = {
      commentReplyClass: "comment-reply-link",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID"
    }, e = s.MutationObserver || s.WebKitMutationObserver || s.MozMutationObserver,
    i = "querySelector" in y && "addEventListener" in s, n = !!y.documentElement.dataset;

  function t() {
    r(), function () {
      if (!e) return;
      new e(d).observe(y.body, {childList: !0, subtree: !0})
    }()
  }

  function r(e) {
    if (i && (u = I(p.cancelReplyId), f = I(p.commentFormId), u)) {
      u.addEventListener("touchstart", a, { passive: false } ), u.addEventListener("click", a, { passive: false } );
      var t = function (e) {
        if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return f.removeEventListener("keydown", t), e.preventDefault(), f.submit.click(), !1
      };
      f && f.addEventListener("keydown", t, { passive: false } );
      for (var n, r = function (e) {
        var t, n = p.commentReplyClass;
        e && e.childNodes || (e = y);
        t = y.getElementsByClassName ? e.getElementsByClassName(n) : e.querySelectorAll("." + n);
        return t
      }(e), d = 0, o = r.length; d < o; d++) (n = r[d]).addEventListener("touchstart", l, { passive: false } ), n.addEventListener("click", l, { passive: false } )
    }
  }

  function a(e) {
    var t = I(p.temporaryFormId);
    t && v && (I(p.parentIdFieldId).value = "0", t.parentNode.replaceChild(v, t), this.style.display = "none", e.preventDefault())
  }

  function l(e) {
    var t = this, n = m(t, "belowelement"), r = m(t, "commentid"), d = m(t, "respondelement"), o = m(t, "postid");
    n && r && d && o && !1 === s.addComment.moveForm(n, r, d, o) && e.preventDefault()
  }

  function d(e) {
    for (var t = e.length; t--;) if (e[t].addedNodes.length) return void r()
  }

  function m(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t)
  }

  function I(e) {
    return y.getElementById(e)
  }

  return i && "loading" !== y.readyState ? t() : i && s.addEventListener("DOMContentLoaded", t, !1), {
    init: r,
    moveForm: function (e, t, n, r) {
      var d = I(e);
      v = I(n);
      var o, i, a, l = I(p.parentIdFieldId), m = I(p.postIdFieldId);
      if (d && v && l) {
        !function (e) {
          var t = p.temporaryFormId, n = I(t);
          if (n) return;
          (n = y.createElement("div")).id = t, n.style.display = "none", e.parentNode.insertBefore(n, e)
        }(v), r && m && (m.value = r), l.value = t, u.style.display = "", d.parentNode.insertBefore(v, d.nextSibling), u.onclick = function () {
          return !1
        };
        try {
          for (var c = 0; c < f.elements.length; c++) if (o = f.elements[c], i = !1, "getComputedStyle" in s ? a = s.getComputedStyle(o) : y.documentElement.currentStyle && (a = o.currentStyle), (o.offsetWidth <= 0 && o.offsetHeight <= 0 || "hidden" === a.visibility) && (i = !0), "hidden" !== o.type && !o.disabled && !i) {
            o.focus();
            break
          }
        } catch (e) {
        }
        return !1
      }
    }
  }
}(window);