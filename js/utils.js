/**
 * 爱心小屋 - 工具函数
 */

(function (global) {
  'use strict';

  const Utils = {
    /**
     * 节流
     * @param {Function} fn
     * @param {number} delay
     */
    throttle: function (fn, delay) {
      let last = 0;
      return function () {
        const now = Date.now();
        if (now - last >= delay) {
          last = now;
          fn.apply(this, arguments);
        }
      };
    },

    /**
     * 防抖
     * @param {Function} fn
     * @param {number} delay
     */
    debounce: function (fn, delay) {
      let timer = null;
      return function () {
        const ctx = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
          fn.apply(ctx, args);
          timer = null;
        }, delay);
      };
    },

    /**
     * 检测是否支持 WOFF2
     */
    supportsWoff2: function () {
      if (!global.document || !global.document.fonts) return false;
      try {
        return global.document.fonts.check('1em custom-font');
      } catch (e) {
        return false;
      }
    }
  };

  global.HeartUtils = Utils;
})(typeof window !== 'undefined' ? window : this);
