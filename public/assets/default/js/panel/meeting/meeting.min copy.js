!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(o, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "/",
    n(n.s = 35)
}({
    35: function(e, t, n) {
        e.exports = n(36)
    },
    36: function(e, t) {
        function n(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return o(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var c, a = !0, l = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    c = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw c
                    }
                }
            }
        }
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        !function(e) {
            "use strict";
            function t(e, t) {
                var n = e.val()
                  , o = n.substring(0, n.length - 2);
                return e.val(o + t),
                o
            }
            function o() {
                e("#timeTwelveSwitch").prop("checked", !1),
                toTimepicker = e(".to-clockpicker").clockpicker({
                    placement: "bottom",
                    align: "left",
                    default: "10:00AM",
                    autoclose: !0,
                    twelvehour: !0,
                    afterDone: function() {
                        i(),
                        toTimepicker.clockpicker("remove"),
                        fromTimepicker.clockpicker("show");
                        var n = e(".to-clockpicker input")
                          , o = e(".to-time .js-am-pm").text();
                        e(".to-time").removeClass("pulsate").html(t(n, o) + ' <span class="js-am-pm font-20">' + o + "</span>"),
                        e("#timeTwelveSwitch").prop("disabled", !0)
                    }
                })
            }
            function i() {
                e("#timeTwelveSwitch").prop("checked", !1),
                fromTimepicker = e(".from-clockpicker").clockpicker({
                    placement: "bottom",
                    align: "left",
                    autoclose: !0,
                    default: "09:00AM",
                    twelvehour: !0,
                    afterDone: function() {
                        o(),
                        fromTimepicker.clockpicker("remove"),
                        toTimepicker.clockpicker("show");
                        var n = e(".from-clockpicker input")
                          , i = e(".from-time .js-am-pm").text();
                        e(".from-time").removeClass("pulsate").html(t(n, i) + ' <span class="js-am-pm font-20">' + i + "</span>"),
                        e(".to-time").addClass("pulsate")
                    }
                }),
                fromTimepicker.clockpicker("show")
            }
            function r(e) {
                var t = '<div class="">\n    <p class="">' + deleteAlertHint + '</p>\n    <div class="mt-30 d-flex align-items-center justify-content-center">\n        <button type="button" id="deleteTime" data-time-id="' + e + '" class="btn btn-sm btn-primary">' + deleteAlertConfirm + '</button>\n        <button type="button" class="btn btn-sm btn-danger ml-10 close-swl">' + deleteAlertCancel + "</button>\n    </div>\n</div>";
                Swal.fire({
                    title: deleteAlertTitle,
                    html: t,
                    icon: "warning",
                    showConfirmButton: !1,
                    showCancelButton: !1,
                    allowOutsideClick: function() {
                        return !Swal.isLoading()
                    }
                })
            }
            o(),
            e("body").on("change", "#timeTwelveSwitch", (function(t) {
                t.preventDefault();
                var n = "AM"
                  , o = "PM";
                this.checked && (n = "PM",
                o = "AM");
                var i = e(".from-time.pulsate").find(".js-am-pm")
                  , r = e(".to-time.pulsate").find(".js-am-pm");
                if (i.length) {
                    i.text(n);
                    var c = e(".from-clockpicker input")
                      , a = c.val();
                    a = a.replace(o, n),
                    c.val(a)
                }
                if (r.length) {
                    r.text(n);
                    var l = e(".to-clockpicker input")
                      , s = l.val();
                    s = s.replace(o, n),
                    l.val(s)
                }
            }
            )),
            e("body").on("click", ".add-time", (function(t) {
                t.preventDefault();
                var n = e(this).closest("tr").attr("data-day")
                  , o = htmlTemplateForAddTime;
                                  Swal.fire({
                    html: o,
                    showCancelButton: !1,
                    showConfirmButton: !1,
                    customClass: {
                        content: "p-0 text-left"
                    },
                    width: "48rem",
                    onOpen: function() {
                        setTimeout((function() {
                            i()
                        }
                        ), 300)
                    },
                    onClose: function() {
                        fromTimepicker.clockpicker("remove"),
                        toTimepicker.clockpicker("remove")
                    }
                })
            }
            )),
            e("body").on("click", "#saveTime", (function(t) {
                t.preventDefault();
                var n = e(this)
                  , o = e(".from-clockpicker input").val()
                  , i = e(".to-clockpicker input").val()
                  , r = n.attr("data-day")
                  , c = n.closest(".add-time-modal")
                  , a = c.find('select[name="meeting_type"]').val()
                  , l = c.find('textarea[name="description"]').val();
                n.addClass("loadingbar primary").prop("disabled", !0);
                var s = {
                    day: r,
                    time: o + "-" + i,
                    meeting_type: a,
                    description: l
                };
                e.post("/panel/meetings/saveTime", s, (function(e) {
                    e && e.registration_package_limited ? handleLimitedAccountModal(e.registration_package_limited) : e && 200 == e.code && (Swal.fire({
                        title: deleteAlertSuccess,
                        text: successSavedTime,
                        showConfirmButton: !1,
                        icon: "success"
                    }),
                    setTimeout((function() {
                        window.location.reload()
                    }
                    ), 1e3))
                }
                )).fail((function() {
                    Swal.fire({
                        title: errorSavingTime,
                        text: noteToTimeMustGreater,
                        icon: "error"
                    }),
                    n.removeClass("loadingbar primary").prop("disabled", !1)
                }
                )).always((function() {
                    fromTimepicker.clockpicker("remove"),
                    toTimepicker.clockpicker("remove")
                }
                ))
            }
            )),
            e("body").on("change", "#inPersonMeetingSwitch", (function() {
                var t = e("#inPersonMeetingAmount")
                  , n = e("#inPersonGroupMeetingOptions");
                this.checked ? (t.removeClass("d-none"),
                e("#groupMeetingSwitch").is(":checked") && n.removeClass("d-none")) : (t.addClass("d-none"),
                n.addClass("d-none"))
            }
            )),
            e("body").on("change", "#groupMeetingSwitch", (function() {
                var t = e("#onlineGroupMeetingOptions")
                  , n = e("#inPersonGroupMeetingOptions");
                this.checked ? (t.removeClass("d-none"),
                e("#inPersonMeetingSwitch").is(":checked") && n.removeClass("d-none")) : (t.addClass("d-none"),
                n.addClass("d-none"))
            }
            )),
            e("body").on("click", ".remove-time", (function(t) {
                t.preventDefault(),
                r(e(this).attr("data-time-id"))
            }
            )),
            e("body").on("click", "#deleteTime", (function(t) {
                t.preventDefault();
                var o = e(this).attr("data-time-id");
                (function(t) {
                    var n = {
                        time_id: t
                    };
                    e.post("/panel/meetings/deleteTime", n, (function(t) {
                        e.toast({
                            heading: deleteAlertSuccess,
                            text: successDeleteTime,
                            bgColor: "#43d477",
                            textColor: "white",
                            hideAfter: 5e3,
                            position: "bottom-right",
                            icon: "success"
                        })
                    }
                    )).fail((function() {
                        e.toast({
                            heading: deleteAlertFail,
                            text: errorDeleteTime,
                            bgColor: "#f63c3c",
                            textColor: "white",
                            hideAfter: 5e3,
                            position: "bottom-right",
                            icon: "error"
                        })
                    }
                    ))
                }
                )(o = o.split(",")),
                Swal.close();
                var i, r = n(o);
                try {
                    for (r.s(); !(i = r.n()).done; ) {
                        var c = i.value;
                        e('.remove-time[data-time-id="' + c + '"]').parent().remove()
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
            )),
            e("body").on("click", ".clear-all", (function(t) {
                t.preventDefault(),
                r(e(this).closest("tr").find(".selected-time .remove-time").map((function() {
                    return this.dataset.timeId
                }
                )).get().join(","))
            }
            )),
            e("body").on("change", "#temporaryDisableMeetingsSwitch", (function(t) {
                t.preventDefault();
                var n = e(this);
                loadingSwl();
                var o = !1;
                this.checked && (o = !0);
                var i = {
                    disable: o
                };
                e.post("/panel/meetings/temporaryDisableMeetings", i, (function(e) {
                    e && 200 == e.code && (Swal.fire({
                        text: requestSuccess,
                        showConfirmButton: !1,
                        icon: "success"
                    }),
                    setTimeout((function() {
                        Swal.close()
                    }
                    ), 2e3))
                }
                )).fail((function() {
                    Swal.fire({
                        text: requestFailed,
                        icon: "error"
                    }),
                    n.removeClass("loadingbar primary").prop("disabled", !1)
                }
                ))
            }
            )),
            e("body").on("click", "#meetingSettingFormSubmit", (function(t) {
                t.preventDefault();
                var n = e(this)
                  , o = n.closest("form")
                  , i = o.attr("action")
                  , r = serializeObjectByTag(o);
                n.addClass("loadingbar primary").prop("disabled", !0),
                e.post(i, r, (function(e) {
                    e && 200 === e.code && (Swal.fire({
                        icon: "success",
                        html: '<h3 class="font-20 text-center text-dark-blue py-25">' + saveMeetingSuccessLang + "</h3>",
                        showConfirmButton: !1,
                        width: "25rem"
                    }),
                    setTimeout((function() {
                        window.location.reload()
                    }
                    ), 500))
                }
                )).fail((function(e) {
                    n.removeClass("loadingbar primary").prop("disabled", !1);
                    var t = e.responseJSON;
                    t && t.errors && Object.keys(t.errors).forEach((function(e) {
                        var n = t.errors[e]
                          , i = o.find('[name="' + e + '"]');
                        i.addClass("is-invalid"),
                        i.parent().find(".invalid-feedback").text(n[0])
                    }
                    ))
                }
                ))
            }
            ))
        }(jQuery)
    }
});
