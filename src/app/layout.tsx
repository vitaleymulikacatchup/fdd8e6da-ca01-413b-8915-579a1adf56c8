import type { Metadata } from "next";
import {
  Inter_Tight,
  Playfair_Display,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Poppins,
  Raleway,
  Ubuntu,
  Nunito
} from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import AuroraBackground from "@/components/background/AuroraBackground";
import Tag from "@/tag/Tag";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grand Haven Hotel - Luxury Accommodations & World-Class Service",
  description: "Experience unparalleled luxury at Grand Haven Hotel. Premium suites, fine dining, spa services, and exceptional hospitality in an elegant setting.",
  keywords: "luxury hotel, premium accommodations, fine dining, spa services, concierge, deluxe suites, ocean view rooms",
  openGraph: {
    title: "Grand Haven Hotel - Luxury Accommodations & World-Class Service",
    description: "Experience unparalleled luxury at Grand Haven Hotel with premium suites, world-class amenities, and exceptional service.",
    siteName: "Grand Haven Hotel",
    type: "website",
    images: [{
      url: "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Grand Haven Hotel luxury lobby"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Haven Hotel - Luxury Accommodations & World-Class Service",
    description: "Experience unparalleled luxury at Grand Haven Hotel with premium suites, world-class amenities, and exceptional service.",
    images: ["https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogWrapper>
        <body
          className={`${interTight.variable} ${playfairDisplay.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${raleway.variable} ${ubuntu.variable} ${nunito.variable} antialiased`}
        >
          <AuroraBackground />
          <Tag />
          {children}
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  if (window.self === window.top) return;

  if (window.__webildEditorInitialized) return;
  window.__webildEditorInitialized = true;

  let isActive = false;
  let hoveredElement = null;
  let selectedElement = null;
  let originalContent = null;
  let isEditing = false;
  let elementTypeLabel = null;
  let hoverOverlay = null;
  let scrollTimeout = null;
  let isScrolling = false;

  const invalidElements = ['html', 'body', 'script', 'style', 'meta', 'link', 'head', 'noscript', 'title'];
  const hoverClass = 'webild-hover';
  const selectedClass = 'webild-selected';

  const style = document.createElement('style');
  style.id = 'webild-inspector-styles';
  style.textContent = '' +
    '.webild-hover {' +
    '  outline: 2px dashed #4d96ff80 !important;' +
    '  border-radius: 0 !important;' +
    '  outline-offset: 2px !important;' +
    '  cursor: pointer !important;' +
    '  transition: outline 0.15s ease !important;' +
    '  background-color: #4d96ff05 !important;' +
    '}' +
    '.webild-selected {' +
    '  outline: 2px solid #4d96ff !important;' +
    '  outline-offset: 2px !important;' +
    '  transition: outline 0.15s ease !important;' +
    '  background-color: #4d96ff05 !important;' +
    '  border-radius: 0 !important;' +
    '}' +
    '[contenteditable="true"].webild-selected {' +
    '  outline: 2px solid #4d96ff !important;' +
    '  background-color: #4d96ff05 !important;' +
    '}' +
    'img.webild-hover,' +
    'img.webild-selected {' +
    '  outline-offset: 2px !important;' +
    '}' +
    '.webild-element-type-label {' +
    '  position: fixed !important;' +
    '  z-index: 999999 !important;' +
    '  background: #4d96ff !important;' +
    '  color: white !important;' +
    '  padding: 4px 8px !important;' +
    '  font-size: 11px !important;' +
    '  font-weight: 600 !important;' +
    '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;' +
    '  pointer-events: none !important;' +
    '  white-space: nowrap !important;' +
    '  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;' +
    '  letter-spacing: 0.3px !important;' +
    '  border: 1px solid #4d96ff20 !important;' +
    '}' +
    '.webild-element-type-label.label-top {' +
    '  border-radius: 6px 6px 0 0 !important;' +
    '}' +
    '.webild-element-type-label.label-bottom {' +
    '  border-radius: 0 0 6px 6px !important;' +
    '}' +
    '.webild-hover-overlay {' +
    '  position: fixed !important;' +
    '  background-color: #4d96ff15 !important;' +
    '  pointer-events: none !important;' +
    '  z-index: 999998 !important;' +
    '  transition: all 0.15s ease !important;' +
    '}';
  document.head.appendChild(style);
  
  const getUniqueSelector = (element, assignId = false) => {
    if (element.dataset && element.dataset.webildSelector) {
      return element.dataset.webildSelector;
    }
    
    const existingId = element.getAttribute('data-webild-id');
    if (existingId) {
      return '[data-webild-id="' + existingId + '"]';
    }
    
    if (assignId) {
      const uniqueId = 'webild-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      element.setAttribute('data-webild-id', uniqueId);
      return '[data-webild-id="' + uniqueId + '"]';
    }
    
    return null;
  };
  
  const getSectionId = (element) => {
    let current = element;
    while (current && current !== document.body) {
      const sectionId = current.getAttribute('data-section');
      if (sectionId) {
        return sectionId;
      }
      current = current.parentElement;
    }
    return 'hero';
  };
  
  const getElementType = (element) => {
  const tagName = element.tagName.toLowerCase();
  const computedStyle = window.getComputedStyle(element);

  if (tagName === 'img') {
    return 'Image';
  }

  const backgroundImage = computedStyle.backgroundImage;
  if (backgroundImage && backgroundImage !== 'none') {
    const urlMatch = backgroundImage.match(/url(['"]?([^'")]+)['"]?)/);
    if (urlMatch && urlMatch[1] && !urlMatch[1].includes('gradient')) {
      const area = element.offsetWidth * element.offsetHeight;
      const hasReasonableSize = area > 1000;
      const hasFewChildren = element.children.length <= 2;
      
      if (hasReasonableSize && hasFewChildren) {
        return 'Image';
      }
    }
  }

    if (tagName === 'button') return 'Button';
    if (tagName === 'a' && element.getAttribute('href')) return 'Button';
    if (element.getAttribute('role') === 'button') return 'Button';

    const buttonClasses = ['btn', 'button', 'cta', 'action-button'];
    const hasButtonClass = buttonClasses.some(cls =>
      element.classList.contains(cls) || element.classList.contains(\`btn-\${cls}\`)
    );

    if (hasButtonClass && element.textContent && element.textContent.trim().length > 0) {
      return 'Button';
    }

    const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'li'];
    if (textTags.includes(tagName)) {
      return 'Text';
    }

    if (tagName === 'div') {
      const hasDirectText = Array.from(element.childNodes).some(node => 
        node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim().length > 0
      );
      
      if (hasDirectText && !element.querySelector('div, section, article, main, header, footer')) {
        return 'Text';
      }
      
      return 'Div';
    }

    if (tagName === 'article') {
      return 'Article';
    }

    if (tagName === 'a' && !element.getAttribute('href')) {
      return 'Text';
    }

    return 'Section';
  };

  const extractOriginalUrl = (url) => {
    if (!url) return url;

    if (url.includes('/_next/')) {
      try {
        const urlObj = new URL(url);
        const originalPath = urlObj.searchParams.get('url');
        if (originalPath) {
          return originalPath;
        }
      } catch (e) {
        return url;
      }
    }
    
    if (url.includes('.webildsbx.cc/')) {
      try {
        const urlObj = new URL(url);
        return urlObj.pathname;
      } catch (e) {
        return url;
      }
    }

    return url;
  };

  const getElementInfo = (element, assignId = false) => {
    const rect = element.getBoundingClientRect();
    const tagName = element.tagName.toLowerCase();
    const selector = getUniqueSelector(element, assignId);
    const sectionId = getSectionId(element);
    
    let className = undefined;
    try {
      if (element.className) {
        if (typeof element.className === 'string') {
          className = element.className;
        } else if (element.className.baseVal !== undefined) {
          className = element.className.baseVal;
        }
      }
    } catch (e) {}
    
    const info = {
      tagName: tagName,
      id: element.id || undefined,
      className: className,
      selector: selector,
      elementType: null,
      sectionId: sectionId,
      boundingBox: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      }
    };
    
    if (tagName === 'img') {
      const originalSrc = extractOriginalUrl(element.src);
      info.imageData = {
        src: originalSrc,
        alt: element.alt || undefined,
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight,
        isBackground: false
      };
    }
    
    const computedStyle = window.getComputedStyle(element);
    const backgroundImage = computedStyle.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      const urlMatch = backgroundImage.match(/url(['"]?([^'")]+)['"]?)/);
      if (urlMatch) {
        const originalBgSrc = extractOriginalUrl(urlMatch[1]);
        if (tagName !== 'img') {
          info.imageData = {
            src: originalBgSrc,
            isBackground: true
          };
        } else {
          if (!info.imageData) info.imageData = {};
          info.imageData.backgroundImageSrc = originalBgSrc;
        }
      }
    }
    
    const elementType = getElementType(element);
    info.elementType = elementType;
    
    if (elementType === 'Button') {
      const buttonText = element.textContent?.trim() || element.value || element.getAttribute('aria-label') || '';
      const buttonHref = element.getAttribute('href') ||
                        element.getAttribute('data-href') ||
                        element.getAttribute('onclick') ||
                        element.dataset?.link ||
                        undefined;

      info.buttonData = {
        text: buttonText,
        href: buttonHref
      };
    }

    if (elementType === 'Text') {
      info.textContent = element.textContent || '';
    }
    
    return info;
  };
  
  const isValidElement = (element) => {
    if (!isActive) return false;
    const tagName = element.tagName?.toLowerCase();
    if (invalidElements.includes(tagName)) return false;
    const isImage = tagName === 'img';
    if (isImage) return true;
    const hasInnerHTML = element.innerHTML && element.innerHTML.trim().length > 0;
    const hasTextContent = element.textContent && element.textContent.trim().length > 0;
    const hasChildren = element.children && element.children.length > 0;
    if (!hasInnerHTML && !hasTextContent && !hasChildren) {
      return false;
    }
    const hasBackgroundImage = window.getComputedStyle(element).backgroundImage !== 'none';
    if (hasBackgroundImage && !hasChildren && !hasTextContent) {
      return false;
    }
    
    return true;
  };

  const getMostSpecificElement = (x, y) => {
    const elements = document.elementsFromPoint(x, y);
    const validElements = elements.filter(el =>
      isValidElement(el) &&
      !el.classList.contains('webild-hover-overlay') &&
      !el.classList.contains('webild-element-type-label')
    );

    if (validElements.length === 0) return null;
    const scoredElements = validElements.map(element => {
      let score = 0;
      const rect = element.getBoundingClientRect();
      const tagName = element.tagName.toLowerCase();
      const computedStyle = window.getComputedStyle(element);
      let depth = 0;
      let current = element;
      while (current && current !== document.body) {
        depth++;
        current = current.parentElement;
      }
      score += depth * 2;
      const hasDirectText = Array.from(element.childNodes).some(node => 
        node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim().length > 0
      );

      const hasImages = element.tagName === 'IMG' || computedStyle.backgroundImage !== 'none' || element.querySelector('img');
      const isInteractive = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(element.tagName);
      const hasFewChildren = element.children.length <= 3;
      const area = rect.width * rect.height;
      const viewportArea = window.innerWidth * window.innerHeight;
      const isSmallElement = area < viewportArea * 0.1;
      if (hasDirectText) score += 20;
      if (hasImages) score += 15;
      if (isInteractive) score += 25;
      if (hasFewChildren) score += 10;
      if (isSmallElement) score += 5;
      if (area > viewportArea * 0.3) score -= 30;
      if (element.hasAttribute('data-section')) score -= 15;
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) score += 20;
      if (['p', 'span', 'label'].includes(tagName)) score += 15;
      if (tagName === 'div' && !hasDirectText && element.children.length > 2) score -= 10;

      return { element, score };
    });
    scoredElements.sort((a, b) => b.score - a.score);
    return scoredElements[0]?.element || validElements[0];
  };

  const isTextElement = (element) => {
    const elementType = getElementType(element);
    return elementType === 'Text';
  };

  const isButtonElement = (element) => {
    const elementType = getElementType(element);
    return elementType === 'Button';
  };
  
  const makeEditable = (element, clickEvent) => {
    if (!isTextElement(element)) return;
    
    originalContent = element.textContent;
    element.contentEditable = 'true';
    element.focus();
    isEditing = true;
    
    window.parent.postMessage({
      type: 'webild-text-editing-started',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    
    const handleInput = () => {
      if (element.textContent !== originalContent) {
        window.parent.postMessage({
          type: 'webild-text-changed',
          data: { 
            selector: getElementInfo(element).selector,
            hasChanges: true
          }
        }, '*');
      }
    };
    
    element.addEventListener('input', handleInput);
    element.dataset.inputHandler = 'true';
    
    if (clickEvent && element.childNodes.length > 0) {
      try {
        let range = null;
        
        if (document.caretRangeFromPoint) {
          range = document.caretRangeFromPoint(clickEvent.clientX, clickEvent.clientY);
        } else if (document.caretPositionFromPoint) {
          const position = document.caretPositionFromPoint(clickEvent.clientX, clickEvent.clientY);
          if (position) {
            range = document.createRange();
            range.setStart(position.offsetNode, position.offset);
            range.collapse(true);
          }
        }
        
        if (range) {
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
        }
      } catch (e) {
        console.warn('[Webild] Could not set caret position:', e);
      }
    }
  };
  
  const makeUneditable = (element, save = false) => {
    if (!element || element.contentEditable !== 'true') return;
    
    element.contentEditable = 'false';
    isEditing = false;
    
    if (element.dataset.inputHandler === 'true') {
      element.removeEventListener('input', () => {});
      delete element.dataset.inputHandler;
    }
    
    window.parent.postMessage({
      type: 'webild-text-editing-ended',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    
    if (save && originalContent !== element.textContent) {
      const elementInfo = getElementInfo(element);
      const change = {
        type: 'updateText',
        selector: elementInfo.selector,
        oldValue: originalContent,
        newValue: element.textContent,
        elementType: elementInfo.elementType,
        sectionId: elementInfo.sectionId,
        timestamp: Date.now()
      };

      saveChangeToStorage(change);

      window.parent.postMessage({
        type: 'webild-element-changed',
        data: change
      }, '*');
    } else if (!save && originalContent !== null) {
      element.textContent = originalContent;
    }
    
    originalContent = null;
  };
  
  const createHoverOverlay = (element) => {
    const rect = element.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.className = 'webild-hover-overlay';
    overlay.style.cssText = \`
      position: fixed !important;
      top: \${rect.top - 2}px !important;
      left: \${rect.left - 2}px !important;
      width: \${rect.width + 4}px !important;
      height: \${rect.height + 4}px !important;
      background-color: rgba(90, 113, 230, 0.15) !important;
      pointer-events: none !important;
      z-index: 999998 !important;
      transition: all 0.15s ease !important;
    \`;
    document.body.appendChild(overlay);
    return overlay;
  };
  
  const removeHoverOverlay = () => {
    if (hoverOverlay) {
      hoverOverlay.remove();
      hoverOverlay = null;
    }
  };
  
  const showElementTypeLabel = (element, elementType) => {
    if (!elementType) return;

    removeElementTypeLabel();

    const rect = element.getBoundingClientRect();
    elementTypeLabel = document.createElement('div');
    elementTypeLabel.className = 'webild-element-type-label';
    const ariaLabel = element.getAttribute('aria-label');
    let labelText;
    
    if (elementType === 'Div') {
      labelText = 'Div';
    } else if (elementType === 'Article') {
      labelText = 'Article';
    } else if (elementType === 'Section') {
      labelText = ariaLabel || 'Section';
    } else {
      labelText = elementType;
    }
    
    elementTypeLabel.textContent = labelText;
    document.body.appendChild(elementTypeLabel);
    const labelRect = elementTypeLabel.getBoundingClientRect();
    let labelTop = rect.top - labelRect.height - 2;
    let labelLeft = rect.left - 3;
    let isLabelOnTop = true;
    if (labelTop < 0) {
      labelTop = rect.bottom + 1;
      isLabelOnTop = false;
    }
    if (labelTop + labelRect.height > window.innerHeight) {
      labelTop = rect.bottom - labelRect.height;
      isLabelOnTop = false;
      if (labelTop < 0) {
        labelTop = rect.top;
        isLabelOnTop = true;
      }
    }
    if (labelLeft + labelRect.width > window.innerWidth) {
      labelLeft = window.innerWidth - labelRect.width;
    }
    if (labelLeft < 0) {
      labelLeft = 0;
    }
    if (isLabelOnTop) {
      elementTypeLabel.classList.add('label-top');
    } else {
      elementTypeLabel.classList.add('label-bottom');
    }

    elementTypeLabel.style.cssText = \`
      left: \${labelLeft}px !important;
      top: \${labelTop}px !important;
      transform: none !important;
    \`;
  };
  
  const removeElementTypeLabel = () => {
    if (elementTypeLabel) {
      elementTypeLabel.remove();
      elementTypeLabel = null;
    }
  };
  
  const handleMouseOver = (e) => {
    if (!isActive) return;

    const target = getMostSpecificElement(e.clientX, e.clientY) || e.target;

    if (!isValidElement(target) || target === hoveredElement || target === selectedElement) {
      return;
    }
    
    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      removeHoverOverlay();
      removeElementTypeLabel();
    }
    
    hoveredElement = target;
    
    const computedStyle = window.getComputedStyle(target);
    const currentPosition = computedStyle.position;
    
    if (currentPosition === 'static' || currentPosition === '') {
      hoveredElement.dataset.webildOriginalPosition = currentPosition || 'none';
      hoveredElement.style.position = 'relative';
    }
    
    hoveredElement.classList.add(hoverClass);
    
    if ((!selectedElement || selectedElement !== target) && !isScrolling) {
      hoverOverlay = createHoverOverlay(target);
    }
    
    const elementType = getElementType(target);
    showElementTypeLabel(target, elementType);
    
    window.parent.postMessage({
      type: 'webild-element-hover',
      data: getElementInfo(target, false)
    }, '*');
  };
  
  const handleMouseOut = (e) => {
    if (!isActive) return;
    
    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);
      
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeElementTypeLabel();
      
      hoveredElement = null;
      
      window.parent.postMessage({
        type: 'webild-element-hover',
        data: null
      }, '*');
    }
  };
  
  const handleClick = (e) => {
  if (!isActive) return;

  if (isEditing) {
    e.stopPropagation();
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  const target = getMostSpecificElement(e.clientX, e.clientY) || e.target;  
  if (!isValidElement(target)) return;
    
    if (selectedElement && selectedElement !== target) {
      makeUneditable(selectedElement, false);
      selectedElement.classList.remove(selectedClass);
      selectedElement.classList.remove(hoverClass);
      
      if (selectedElement.dataset.webildOriginalPosition) {
        selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
        delete selectedElement.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeElementTypeLabel();
    }
    
    if (selectedElement === target) {
      if (target.dataset.webildOriginalPosition) {
        target.style.position = target.dataset.webildOriginalPosition === 'none' ? '' : target.dataset.webildOriginalPosition;
        delete target.dataset.webildOriginalPosition;
      }
      
      removeHoverOverlay();
      removeElementTypeLabel();
      
      selectedElement = null;
      window.parent.postMessage({
        type: 'webild-element-selected',
        data: null
      }, '*');
      return;
    }
    
    selectedElement = target;
    selectedElement.classList.add(selectedClass);
    
    removeHoverOverlay();
    removeElementTypeLabel();
    
    if (hoveredElement === target) {
      hoveredElement.classList.remove(hoverClass);
      hoveredElement = null;
    }
    
    const elementInfo = getElementInfo(target, true);
    selectedElement.dataset.webildSelector = elementInfo.selector;
    showElementTypeLabel(target, elementInfo.elementType);
    
    window.parent.postMessage({
      type: 'webild-element-selected',
      data: elementInfo
    }, '*');
    
    if (isTextElement(target)) {
      setTimeout(() => makeEditable(target, e), 50);
    }
  };
  
  const handleKeyDown = (e) => {
    if (!isActive) return;
    if (!isEditing || !selectedElement) return;
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      makeUneditable(selectedElement, true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      makeUneditable(selectedElement, false);
    }
  };
  
  const handleBlur = (e) => {
    if (!isActive) return;
    if (isEditing && selectedElement && e.target === selectedElement) {
      makeUneditable(selectedElement, true);
    }
  };
  
  const handleScroll = () => {
    if (!isActive) return;
    if (selectedElement) {
      makeUneditable(selectedElement, false);
      selectedElement.classList.remove(selectedClass);
      if (selectedElement.dataset.webildOriginalPosition) {
        selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
        delete selectedElement.dataset.webildOriginalPosition;
      }
      selectedElement = null;
      
      window.parent.postMessage({
        type: 'webild-element-selected',
        data: null
      }, '*');
    }
    
    if (hoveredElement) {
      hoveredElement.classList.remove(hoverClass);
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      hoveredElement = null;
      
      window.parent.postMessage({
        type: 'webild-element-hover',
        data: null
      }, '*');
    }
    
    removeHoverOverlay();
    removeElementTypeLabel();
    
    isScrolling = true;
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
    }, 150);
    
    window.parent.postMessage({
      type: 'webild-iframe-scroll'
    }, '*');
  };
  
  const getStorageKey = () => {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/').filter(Boolean);
    return \`webild-changes-\${pathParts.join('-')}\`;
  };

  const saveChangeToStorage = (change) => {
    try {
      const storageKey = getStorageKey();
      const existingChanges = JSON.parse(localStorage.getItem(storageKey) || '[]');

      const filteredChanges = existingChanges.filter(c => {
        return !(c.oldValue === change.oldValue && c.sectionId === change.sectionId);
      });
      filteredChanges.push(change);

      localStorage.setItem(storageKey, JSON.stringify(filteredChanges));

      window.parent.postMessage({
        type: 'webild-change-saved-locally',
        data: { change, allChanges: filteredChanges }
      }, '*');
    } catch (error) {
      console.error('Failed to save change to localStorage:', error);
    }
  };

  const clearLocalChanges = () => {
    try {
      const storageKey = getStorageKey();
      localStorage.removeItem(storageKey);
      window.parent.postMessage({
        type: 'webild-local-changes-cleared',
        data: {}
      }, '*');
    } catch (error) {
      console.error('Failed to clear local changes:', error);
    }
  };

  const handleMessage = (e) => {
    if (!e.data || !e.data.type) return;

    if (e.data.type === 'webild-activate-editor') {
      if (!isActive) {
        isActive = true;
        window.parent.postMessage({ type: 'webild-editor-activated' }, '*');
      }
      return;
    }

    if (e.data.type === 'webild-deactivate-editor') {
      if (isActive) {
        isActive = false;

        if (selectedElement) {
          makeUneditable(selectedElement, false);
          selectedElement.classList.remove(selectedClass);
          selectedElement = null;
        }
        if (hoveredElement) {
          hoveredElement.classList.remove(hoverClass);
          hoveredElement = null;
        }

        removeHoverOverlay();
        removeElementTypeLabel();
        window.parent.postMessage({ type: 'webild-editor-deactivated' }, '*');
      }
      return;
    }

    if (e.data.type === 'webild-clear-local-changes') {
      clearLocalChanges();
      return;
    }

    if (e.data.type === 'webild-update-text') {
      const { selector, newValue, oldValue, sectionId } = e.data.data;
      try {
        let element = null;
        
        if (selector) {
          element = document.querySelector(selector);
        }
        
        if (!element && selectedElement && isTextElement(selectedElement)) {
          element = selectedElement;
          const newSelector = getUniqueSelector(element, true);
          if (newSelector) {
            selectedElement.dataset.webildSelector = newSelector;
          }
        }
        
        if (!element && oldValue && sectionId) {
          const sectionElement = document.querySelector('[data-section="' + sectionId + '"]');
          if (sectionElement) {
            const textElements = sectionElement.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, div');
            for (let i = 0; i < textElements.length; i++) {
              const el = textElements[i];
              if (isTextElement(el) && el.textContent.trim() === oldValue.trim()) {
                element = el;
                const newSelector = getUniqueSelector(element, true);
                if (newSelector) {
                  element.dataset.webildSelector = newSelector;
                }
                break;
              }
            }
          }
        }
        if (element && isTextElement(element)) {
          element.textContent = newValue; 
          window.parent.postMessage({
            type: 'webild-text-update-success',
            data: {
              selector: element.dataset.webildSelector || getUniqueSelector(element, true),
              newValue: newValue
            }
          }, '*');
        } else {
          window.parent.postMessage({
            type: 'webild-text-update-failed',
            data: { selector, newValue }
          }, '*');
        }
      } catch (error) {
        console.error('[Webild] Error updating text:', error);
        window.parent.postMessage({
          type: 'webild-text-update-failed',
          data: { selector, newValue, error: error.message }
        }, '*');
      }
      return;
    }

    if (e.data.type === 'webild-update-button') {
      const { selector, text, href } = e.data.data;
      try {
        const element = document.querySelector(selector);
        if (element && isButtonElement(element)) {
          if (text !== undefined) {
            element.textContent = text;
          }
          if (href !== undefined) {
            if (element.tagName.toLowerCase() === 'a') {
              element.href = href;
            } else {
              element.setAttribute('data-href', href);
            }
          }
        }
      } catch (error) {
        console.error('[Webild] Invalid selector for button update:', selector, error);
      }
      return;
    }

    if (!isActive) return;

    if (e.data.type === 'webild-replace-image') {
      const { selector, newSrc, isBackground } = e.data.data;
      let element = null;

      try {
        element = document.querySelector(selector);
      } catch (error) {
        console.error('[Webild] Invalid selector for image replacement:', selector, error);
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: 'Invalid selector: ' + error.message, success: false }
        }, '*');
        return;
      }

      if (!element) {
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: 'Element not found', success: false }
        }, '*');
        return;
      }

      try {
        let replaced = false;
        let oldValue = '';

        if (isBackground) {
          oldValue = window.getComputedStyle(element).backgroundImage;
          element.style.backgroundImage = \`url('\${newSrc}')\`;
          replaced = true;
        } else if (element.tagName.toLowerCase() === 'img') {
          oldValue = element.src;
          element.src = newSrc;
          replaced = true;
        } else {
          const hasBackgroundImage = window.getComputedStyle(element).backgroundImage !== 'none';
          if (hasBackgroundImage) {
            oldValue = window.getComputedStyle(element).backgroundImage;
            element.style.backgroundImage = \`url('\${newSrc}')\`;
            replaced = true;
          }
        }

        if (replaced) {
          const elementInfo = getElementInfo(element);

          let cleanOldValue = oldValue;
          if (oldValue.includes('url(')) {
            const urlMatch = oldValue.match(/url(['"]?([^'")]+)['"]?)/);
            if (urlMatch) {
              cleanOldValue = urlMatch[1];
            }
          }

          cleanOldValue = extractOriginalUrl(cleanOldValue);

          const change = {
            type: 'replaceImage',
            selector: selector,
            oldValue: cleanOldValue,
            newValue: newSrc,
            elementType: elementInfo.elementType,
            sectionId: elementInfo.sectionId,
            timestamp: Date.now()
          };

          saveChangeToStorage(change);

          window.parent.postMessage({
            type: 'webild-element-changed',
            data: change
          }, '*');

          window.parent.postMessage({
            type: 'webild-image-replaced',
            data: { selector, newSrc, success: true }
          }, '*');
        } else {
          window.parent.postMessage({
            type: 'webild-image-replacement-error',
            data: { selector, message: 'Could not determine how to replace image', success: false }
          }, '*');
        }
      } catch (error) {
        window.parent.postMessage({
          type: 'webild-image-replacement-error',
          data: { selector, message: error.message || 'Failed to replace image', success: false }
        }, '*');
      }
    }
  };
  
  document.addEventListener('mouseover', handleMouseOver, true);
  document.addEventListener('mouseout', handleMouseOut, true);
  document.addEventListener('click', handleClick, true);
  document.addEventListener('keydown', handleKeyDown, true);
  document.addEventListener('blur', handleBlur, true);
  window.addEventListener('scroll', handleScroll, true);
  window.addEventListener('message', handleMessage, true);
  
  window.webildCleanup = () => {
    isActive = false;
    
    if (selectedElement) {
      makeUneditable(selectedElement, false);
    }
    
    removeHoverOverlay();
    removeElementTypeLabel();
    
    document.removeEventListener('mouseover', handleMouseOver, true);
    document.removeEventListener('mouseout', handleMouseOut, true);
    document.removeEventListener('click', handleClick, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    document.removeEventListener('blur', handleBlur, true);
    window.removeEventListener('scroll', handleScroll, true);
    window.removeEventListener('message', handleMessage, true);
    
    document.querySelectorAll('.' + hoverClass).forEach(el => {
      el.classList.remove(hoverClass);
    });
    document.querySelectorAll('.' + selectedClass).forEach(el => {
      el.classList.remove(selectedClass);
    });
    
    const styleEl = document.getElementById('webild-inspector-styles');
    if (styleEl) styleEl.remove();
    
    hoveredElement = null;
    selectedElement = null;
  };
  
  window.parent.postMessage({ type: 'webild-editor-ready' }, '*');
})();
`
          }}
        />
      </body>
      </PostHogWrapper>
    </html>
  );
}