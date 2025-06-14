Array.prototype.shuffle = function() {
	var i = this.length,
		j, temp;
	if (i == 0) return this;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};
(function($, window, document, undefined) {
	var game = 'memory_game';

	function memory_game(element, options) {
		this.element = element;
		this.container = $("<div class='game-grid' />");
		this.options = options;
		this._name = game;
		this.score = 0;
		this.max_level = (this.options.contents.length) / 2;
		this.init(this.options.level);
		return this;
	}
	memory_game.prototype.init = function() {
		base = this;
		this.arrange(this.options.level);
		this.start();
		this.options.start_ui.click(function() {
			clearTimeout(timer_var);
			base.arrange(base.level);
		});
	};
	memory_game.prototype.arrange = function(level) {

		this.level = level;
		no_of_contents = level * 2;
		container = this.container;
		container.html("");
		var element_array = new Array;
		number_of_element = no_of_contents * 2;
		for (i = 0; i < number_of_element; i++) {
			element_array[i] = i;
			li = $('<div class="game-grid-item object" />');
			container.append(li);
		}
		element_array.shuffle();
		this.options.contents.forEach(function(val, ind) {
			if (ind < (no_of_contents)) {
				next_index = ind + no_of_contents;
				container.find('.object').eq(element_array[ind]).attr('data-match', element_array[next_index]).html(val);
				container.find('.object').eq(element_array[next_index]).attr('data-match', element_array[ind]).html(val);
			}
		});
		timing_ms = this.options.timeout * level;
		$(this.element).append(container);
		$(this.element).append(this.options.start_ui);
		$(this.element).append(this.options.score_ui);
		this.close_the_btn(this.options.timeout);
	};
	memory_game.prototype.close_the_btn = function(timing_ms) {
		if (typeof timer_var == 'undefined') {
			timer_var = '';
		}
		clearTimeout(timer_var);
		timer_var = setTimeout(function() {
			$(".object").not("[matched]").addClass('closed');
		}, timing_ms);
	};
	memory_game.prototype.start = function() {
		var base = this;
		this.options.start_ui.html('Start level ' + base.level);
		this.options.score_ui.html('Your Score is ' + base.score);
		this.container.on('click', ".closed", function(e) {
			e.preventDefault();
			if (typeof clicked == 'undefined') {
				clicked = 0;
			}
			clicked++;
			$(this).removeClass("closed");
			if (clicked == 1) {
				$that = $(this);
			} else if (clicked == 2) {
				$this = $(this);
			}
			if (clicked == 2) {
				if ($this.data('match') == $that.index()) {
					$this.attr('matched', 'matched');
					$that.attr('matched', 'matched');
					base.score++;
				} else {
					base.score -= .25;
				}
				clicked = 0;
				base.close_the_btn(100);
			}
			base.options.score_ui.html("Your Score is " + base.score);
			if ($(".closed").length == 0) {
				base.level++;
				if (base.level === base.max_level) {
					alert("Congratulation!!! All level cleared.");
					base.level = 1;
					return;
				}
				base.options.start_ui.html("Start Level " + base.level);
				setTimeout(function() {
					if (confirm("Level " + (base.level - 1) + " is cleared.Want to play next level?")) {
						base.arrange(base.level);
					}
				}, 2000);
			}
		});
	};
	$.fn[game] = function(options) {
		defaults = {
			level: 1,
			success_score: 1,
			failed_score: 0.25,
			timeout: 2000,
			contents: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			start_ui: $('<button class="w3-button w3-pink"></button>'),
			score_ui: $('<div score class="w3-button w3-teal"></div>')
		};
		return this.each(function() {
			options = $.extend(defaults, options);
			new memory_game(this, options);
		});
	}
})(jQuery, window, document);