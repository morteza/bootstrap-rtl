$.fn.tooltip.Constructor.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
  return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
         placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
         placement == 'right'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
      /* placement == 'left' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
};

$.fn.popover.Constructor.prototype.getCalculatedOffset = $.fn.tooltip.Constructor.prototype.getCalculatedOffset;
