(function(window) {
  function objectLoop(object, callback) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        callback(key, object[key]);
      }
    }
  }

  var tests = {
    "ud-small": {
      passed: false,
      width: "399px",
      css: {
        values: ["rgb(255, 0, 0)"]
      }
    },
    "ud-medium": {
      passed: false,
      width: "450px",
      css: {
        values: ["rgb(0, 128, 0)", "rgb(0, 255, 0)"]
      }
    },
    "ud-large": {
      passed: false,
      width: "650px",
      css: {
        values: ["rgb(0, 0, 255)"]
      }
    }
  };

  var iframeElem = null;
  var contentCopy = '';
  var oldStyles = '';
  var styles = '';

  function getStyles() {
    styles = document.head.querySelector('style').innerHTML;
  }

  function createIframe() {
    return new Promise(function(resolve, reject) {
      iframeElem = document.querySelector('iframe.mq-test');

      if (!iframeElem) {
        iframeElem = document.createElement('iframe');
        iframeElem.classList.add('mq-test');
        document.body.appendChild(iframeElem);
        iframeElem.style.position = 'absolute';
        iframeElem.style.left = '100%';
        iframeElem.src = 'about:blank';
      }
      resolve();
    });
  }

  function setIframeWidth(width) {
    return new Promise(function(resolve, reject) {
      iframeElem.style.width = width;
      // TODO: find a less janky way to force layout? 
      if (iframeElem.contentWindow.innerWidth === "") {
        console.log(iframeElem.contentWindow.innerWidth);
      }
      if (iframeElem.style.width === width) {
        resolve();
      } else {
        reject('iFrame width not set');
      }
    });
  }

  function addContentToIframe(size) {
    return new Promise(function(resolve, reject) {
      window.giveIframeValue = function(size, value) {
        if (!size || !value) {
          reject();
        } else{
          resolve({size: size, value: value});
        }
      };
      var content = document.body.querySelector('.container').innerHTML;

      iframeElem.contentDocument.head.innerHTML = '';
      iframeElem.contentDocument.body.innerHTML = '';

      var styleTag = document.createElement('style');
      styleTag.innerHTML = styles;
      iframeElem.contentDocument.head.appendChild(styleTag);
      
      var divTag = document.createElement('div');
      divTag.innerHTML = content;
      iframeElem.contentDocument.body.appendChild(divTag);

      var scriptTag = document.createElement('script');
      scriptTag.innerHTML = 'var s = window.getComputedStyle(document.body); var color = s.backgroundColor; parent.window.giveIframeValue("' + size + '", color)';
      iframeElem.contentDocument.body.appendChild(scriptTag);
    });
  }

  function reportResults(report) {
    return new Promise(function(resolve, reject) {
      if (!report) {
        // whatevs, don't worry about it
        resolve();
        return;
      }
      var size = report.size;
      var studentValue = report.value;

      var hasCorrectStyle = false;

      tests[size].css.values.forEach(function(value) {
        if (studentValue === value) {
          hasCorrectStyle = true;
        }
      });

      if (hasCorrectStyle) {
        tests[size].passed = true;
        window.dispatchEvent(new CustomEvent(size, {'detail': 'passed'}));
      }
      resolve();
    });
  }

  var interval = window.setInterval(function() {
    var sequence = Promise.resolve();

    var running = false;

    getStyles();

    if (styles !== oldStyles) {
      oldStyles = styles;
    } else {
      // css hasn't changed so no need for evaluating
      return;
    }

    objectLoop(tests, function(size, value) {
      if (!value.passed) {
        running = true;
        
        sequence = sequence
        .then(createIframe)
        .then(function() {
          return setIframeWidth(value.width);
        })
        .then(function() {
          return addContentToIframe(size);
        })
        .then(reportResults)
        .catch(function(e) {
          throw e;
        });
      }
    });

    if (!running) {
      window.clearInterval(interval);
    }

  }, 1000);
})(window);