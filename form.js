// /* Old Stuff */

// /* MULTI-SELECT FUNCTIONS */
// /* Bound to document for dynamically injected content */
// function bindMultiSelectDropdown(elementId) {
//     bindSelectInMultiSelectDropdown(elementId);
//     bindExpandMultiSelectDropdown(elementId);
//     bindMouseOutMultiSelectDropdown(elementId);
// }

// function bindSelectInMultiSelectDropdown(elementId) {
//     $(document).on("click", elementId + " ul > li.selectable", function (e) {
//         e.preventDefault();
//         $(this).find(".checkmark").toggleClass("active");
//     });
// }

// function bindExpandMultiSelectDropdown(elementId) {
//     $(document).on("click", elementId + ":not(.disabled)", function (e) {
//         e.preventDefault();
//         $(this).addClass("open");
//         $(this).find(".default-option").hide();
//         $(this).find("li").show();
//     });
// }

// function bindMouseOutMultiSelectDropdown(elementId) {
//     $(document).mouseup(function (e) {
//         var container = $(elementId);
//         if (!container.is(e.target) &&
//             container.has(e.target).length === 0) {
//             var currentItem = '';
//             $(".multiselect-dropdown.open").each(function (cindex, celement) {
//                 $(this).removeClass("open");
//                 $(this).find("li").hide();
//                 $(this).find(".default-option").show();
//                 sortEmployeeListMultiSelectDropdown($(this));
//                 $(this).find("ul").prepend($(this).find(".default-option"));
//             });
//         }
//     });
// }

// function sortEmployeeListMultiSelectDropdown(myData) {
//     myData.find('.checkmark.active').closest("li").sort(function (a, b) {
//         return ($(b).attr('data-name')) < ($(a).attr('data-name')) ? 1 : -1;
//     }).prependTo(myData.find("ul")).show();
// }

// /* New Stuff */

// $(".action-start").click(function (e) {
//     e.preventDefault();
//     gotoTestSelection();
// });

// $("#test-selector .dropdown-menu a").click(function (e) {
//     e.preventDefault();
//     var testId = $(this).attr("data-id");
//     console.log("Clicked test option " + testId);
//     $(".action-test-select").removeClass("disabled");
//     showTestOverview(testId);
// });

// $(".action-test-select").click(function (e) {
//     e.preventDefault();
//     if (!$(this).hasClass("disabled")) {
//         var activeTest = $("#test-selector .test-active").attr("data-id");
//         gotoTestSelected(activeTest);
//     }
// });

// $(".action-cancel-test-select").click(function (e) {
//     e.preventDefault();
//     cancelTestSelection();
// });

// $(".action-cancel").click(function (e) {
//     e.preventDefault();
//     cancelTest();
// });

// $(".question .tooltip-show").click(function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     var questionId = $(this).closest(".questionnaire-question-container").attr("data-id");
//     showQuestionTooltip(questionId, $(this));
// });

// $(".answers .tooltip-show").click(function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//     var answerId = $(this).closest("a").attr("data-id");
//     showAnswerTooltip(answerId, $(this));
// });

// $(".employee-questionnaire").click(function (e) {
//     hideTooltip();
// });

// /* When a user clicks the answer */
// $(".answers a").click(function (e) {
//     e.preventDefault();
//     hideTooltip();
//     $(this).closest(".answers").find("a").removeClass("selected");
//     $(this).addClass("selected");
// });

// /* When a user clicks the answer then hits next */
// $(".action-next").click(function (e) {
//     e.preventDefault();
//     gotoNextQuestion();
// });

// /* When a user is ready to calculate */
// $(".action-calculate").click(function (e) {
//     e.preventDefault();
//     var activeTest = $("#test-selector .test-active").attr("data-id");
//     var testTitle = $(".test-title").text();
//     calculateResults(activeTest);
//     $(".questionnaire-slide").addClass("hidden");
//     $("#slide-results").removeClass("hidden");
//     $(".final-exemption-result .test").text(testTitle);
// });

// function gotoTestSelection() {
//     hideTooltip();
//     $(".scrollable-content").removeClass("scrollable-footerless");
//     $("#slide-overview").addClass("hidden");
//     $("#slide-test-selection").removeClass("hidden");
// }

// function cancelTestSelection() {
//     hideTooltip();
//     $(".scrollable-content").addClass("scrollable-footerless");
//     $("#slide-test-selection").addClass("hidden");
//     $("#slide-overview").removeClass("hidden");
//     $("#test-descriptions .test-description").addClass("hidden");
//     $("#test-descriptions .test-description:first-child").removeClass("hidden");
//     $("#test-selector .test-active").attr("data-id", 0);
//     $(".questionnaire-footer .action-test-select").addClass("disabled");
// }

// function cancelTest() {
//     hideTooltip();
//     $(".test-title").addClass("hidden");
//     $("#slide-overview").addClass("hidden");
//     $("#slide-questionnaire-questions").addClass("hidden");
//     $("#slide-test-selection").removeClass("hidden");
//     $("#test-descriptions .test-description").addClass("hidden");
//     $("#test-descriptions .test-description:first-child").removeClass("hidden");
//     $("#test-selector .test-active").attr("data-id", 0);
//     $(".questionnaire-footer .action-test-select").addClass("disabled");
// }

// function showTestOverview(testId) {
//     if (testId > 0) {
//         hideTooltip();
//         var testTitle = $("#test-selector a[data-id='" + testId + "']").text();
//         $(".scrollable-content").removeClass("scrollable-footerless");
//         $("#test-descriptions .test-description[data-id='" + testId + "']").removeClass("hidden").siblings().addClass("hidden");
//         $(".wizard-background .image").attr("class", "image image-test-" + testId);
//         $("#test-selector .test-active").attr("data-id", testId);
//         $(".test-title").text(testTitle);
//     }
// }

// function gotoTestSelected(testId) {
//     hideTooltip();
//     $("#slide-overview").addClass("hidden");
//     $("#slide-test-selection").addClass("hidden");
//     $(".questionnaire-question-container").addClass("hidden");
//     $(".questionnaire-question-container[data-test='" + testId + "']").first().removeClass("hidden");
//     $("#slide-questionnaire-questions").removeClass("hidden");
//     $(".test-title").removeClass("hidden");
// }

// function gotoPrevQuestion() {
//     hideTooltip();
//     var activeTest = $("#test-selector .test-active").attr("data-id");
//     if ($(".questionnaire-question-container:visible").find(".answers a").is(".selected")) {
//         var prevQuestion = $(".questionnaire-question-container:visible").prev().filter("[data-test='" + activeTest + "']");
//         updateQuestionFooter();
//         $(".questionnaire-question-container:visible").addClass("hidden");
//         prevQuestion.removeClass("hidden");
//     } else {
//         // No selection made
//     }
// }

// function gotoNextQuestion() {
//     hideTooltip();
//     var activeTest = $("#test-selector .test-active").attr("data-id");
//     if ($(".questionnaire-question-container:visible").find(".answers a").is(".selected")) {
//         var nextQuestion = $(".questionnaire-question-container:visible").next().filter("[data-test='" + activeTest + "']");
//         updateQuestionFooter();
//         $(".questionnaire-question-container:visible").addClass("hidden");
//         nextQuestion.removeClass("hidden");
//     } else {
//         // No selection made
//     }
// }

// function calculateResults(testId) {
//     hideTooltip();
//     if ($(".questionnaire-question-container[data-test='" + testId + "'] .answers a[data-disqualify='1']").hasClass("selected")) {
//         $(".final-exemption-result .status").text("Non-Exempt");
//     } else {
//         $(".final-exemption-result .status").text("Exempt");
//     }
// }

// function updateQuestionFooter() {
//     var activeTest = $("#test-selector .test-active").attr("data-id");
//     var prevQuestion = $(".questionnaire-question-container:visible").prev().filter("[data-test='" + activeTest + "']");
//     var prevPrevQuestion = prevQuestion.prev().filter("[data-test='" + activeTest + "']");
//     var nextQuestion = $(".questionnaire-question-container:visible").next().filter("[data-test='" + activeTest + "']");
//     var nextNextQuestion = nextQuestion.next().filter("[data-test='" + activeTest + "']");
//     if (prevQuestion.length == 0) {
//         $(".btn.action-back").addClass("hidden");
//     } else {
//         $(".btn.action-back").removeClass("hidden");
//     }
//     if (nextNextQuestion.length == 0) {
//         $(".btn.action-next").addClass("hidden");
//         $(".btn.action-calculate").removeClass("hidden");
//     } else {
//         $(".btn.action-next").removeClass("hidden");
//         $(".btn.action-calculate").addClass("hidden");
//     }
// }

// function showQuestionTooltip(questionId, elem) {
//     var pos = elem.offset();
//     var width = elem.outerWidth();
//     $(".tooltip").addClass("hidden");
//     $(".tooltip[data-question-id='" + questionId + "']").css({
//         top: pos.top + "px",
//         left: (pos.left + width) + "px"
//     }).removeClass("hidden");
// }

// function showAnswerTooltip(answerId, elem) {
//     var pos = elem.offset();
//     var width = elem.outerWidth();
//     $(".tooltip").addClass("hidden");
//     $(".tooltip[data-answer-id='" + answerId + "']").css({
//         top: pos.top + "px",
//         left: (pos.left + width) + "px"
//     }).removeClass("hidden");
// }

// function hideTooltip() {
//     $(".tooltip").addClass("hidden");
// }

// bindMultiSelectDropdown(".multiselect-dropdown");