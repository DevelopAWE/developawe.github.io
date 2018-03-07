/*
  Dimension by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)',
  });

  $(() => {
    let $window = $(window),
      $body = $('body'),
      $wrapper = $('#wrapper'),
      $header = $('#header'),
      $footer = $('#footer'),
      $main = $('#main'),
      $main_articles = $main.children('article');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', () => {
      window.setTimeout(() => {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Fix: Flexbox min-height bug on IE.
    if (skel.vars.IEVersion < 12) {
      let flexboxFixTimeoutId;

      $window
        .on('resize.flexbox-fix', () => {
          clearTimeout(flexboxFixTimeoutId);

          flexboxFixTimeoutId = setTimeout(() => {
            if ($wrapper.prop('scrollHeight') > $window.height()) $wrapper.css('height', 'auto');
            else $wrapper.css('height', '100vh');
          }, 250);
        })
        .triggerHandler('resize.flexbox-fix');
    }

    // Nav.
    let $nav = $header.children('nav'),
      $nav_li = $nav.find('li');

    // Add "middle" alignment classes if we're dealing with an even number of items.
    if ($nav_li.length % 2 == 0) {
      $nav.addClass('use-middle');
      $nav_li.eq($nav_li.length / 2).addClass('is-middle');
    }

    // Main.
    let delay = 325,
      locked = false;

    // Methods.
    $main._show = function (id, initial) {
      const $article = $main_articles.filter(`#${id}`);

      // No such article? Bail.
      if ($article.length == 0) return;

      // Handle lock.

      // Already locked? Speed through "show" steps w/o delays.
      if (locked || (typeof initial !== 'undefined' && initial === true)) {
        // Mark as switching.
        $body.addClass('is-switching');

        // Mark as visible.
        $body.addClass('is-article-visible');

        // Deactivate all articles (just in case one's already active).
        $main_articles.removeClass('active');

        // Hide header, footer.
        $header.hide();
        $footer.hide();

        // Show main, article.
        $main.show();
        $article.show();

        // Activate article.
        $article.addClass('active');

        // Unlock.
        locked = false;

        // Unmark as switching.
        setTimeout(() => {
          $body.removeClass('is-switching');
        }, initial ? 1000 : 0);

        return;
      }

      // Lock.
      locked = true;

      // Article already visible? Just swap articles.
      if ($body.hasClass('is-article-visible')) {
        // Deactivate current article.
        const $currentArticle = $main_articles.filter('.active');

        $currentArticle.removeClass('active');

        // Show article.
        setTimeout(() => {
          // Hide current article.
          $currentArticle.hide();

          // Show article.
          $article.show();

          // Activate article.
          setTimeout(() => {
            $article.addClass('active');

            // Window stuff.
            $window.scrollTop(0).triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(() => {
              locked = false;
            }, delay);
          }, 25);
        }, delay);
      } else {
        // Otherwise, handle as normal.
        // Mark as visible.
        $body.addClass('is-article-visible');

        // Show article.
        setTimeout(() => {
          // Hide header, footer.
          $header.hide();
          $footer.hide();

          // Show main, article.
          $main.show();
          $article.show();

          // Activate article.
          setTimeout(() => {
            $article.addClass('active');

            // Window stuff.
            $window.scrollTop(0).triggerHandler('resize.flexbox-fix');

            // Unlock.
            setTimeout(() => {
              locked = false;
            }, delay);
          }, 25);
        }, delay);
      }
    };

    $main._hide = function (addState) {
      const $article = $main_articles.filter('.active');

      // Article not visible? Bail.
      if (!$body.hasClass('is-article-visible')) return;

      // Add state?
      if (typeof addState !== 'undefined' && addState === true) history.pushState(null, null, '');

      // Handle lock.

      // Already locked? Speed through "hide" steps w/o delays.
      if (locked) {
        // Mark as switching.
        $body.addClass('is-switching');

        // Deactivate article.
        $article.removeClass('active');

        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        $body.removeClass('is-article-visible');

        // Unlock.
        locked = false;

        // Unmark as switching.
        $body.removeClass('is-switching');

        // Window stuff.
        $window.scrollTop(0).triggerHandler('resize.flexbox-fix');

        return;
      }

      // Lock.
      locked = true;

      // Deactivate article.
      $article.removeClass('active');

      // Hide article.
      setTimeout(() => {
        // Hide article, main.
        $article.hide();
        $main.hide();

        // Show footer, header.
        $footer.show();
        $header.show();

        // Unmark as visible.
        setTimeout(() => {
          $body.removeClass('is-article-visible');

          // Window stuff.
          $window.scrollTop(0).triggerHandler('resize.flexbox-fix');

          // Unlock.
          setTimeout(() => {
            locked = false;
          }, delay);
        }, 25);
      }, delay);
    };

    // Articles.
    $main_articles.each(function () {
      const $this = $(this);

      // Close.
      $('<div class="close">Close</div>')
        .appendTo($this)
        .on('click', () => {
          location.hash = '';
          history.pushState('', document.title, window.location.pathname + window.location.search);
        });

      // Prevent clicks from inside article from bubbling.
      $this.on('click', (event) => {
        event.stopPropagation();
      });
    });

    // Events.
    $body.on('click', (event) => {
      // Article visible? Hide.
      if ($body.hasClass('is-article-visible')) $main._hide(true);
    });

    $window.on('keyup', (event) => {
      switch (event.keyCode) {
        case 27:
          // Article visible? Hide.
          if ($body.hasClass('is-article-visible')) $main._hide(true);

          break;

        default:
          break;
      }
    });

    $window.on('hashchange', (event) => {
      // Empty hash?
      if (location.hash == '' || location.hash == '/') {
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Hide.
        $main._hide();
      } else if ($main_articles.filter(location.hash).length > 0) {
        // Otherwise, check for a matching article.
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();

        // Show article.
        $main._show(location.hash.substr(1));
      }
    });

    // Scroll restoration.
    // This prevents the page from scrolling back to the top on a hashchange.
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    else {
      let oldScrollPos = 0,
        scrollPos = 0,
        $htmlbody = $('html,body');

      $window
        .on('scroll', () => {
          oldScrollPos = scrollPos;
          scrollPos = $htmlbody.scrollTop();
        })
        .on('hashchange', () => {
          $window.scrollTop(oldScrollPos);
        });
    }

    // Initialize.

    // Hide main, articles.
    $main.hide();
    $main_articles.hide();

    // Initial article.
    if (location.hash != '' && location.hash != '/') {
      $window.on('load', () => {
        $main._show(location.hash.substr(1), true);
      });
    }
  });
}(jQuery));
