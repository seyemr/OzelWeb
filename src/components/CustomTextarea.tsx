import React, { useRef, useEffect, useCallback } from 'react'

interface CustomTextareaProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  rows?: number
  onFocus?: () => void
  onBlur?: () => void
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
  rows = 5,
  onFocus,
  onBlur
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }, [onChange])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Allow all keyboard events to pass through
    // Don't prevent default or stop propagation
    
    // Special handling for common keys to ensure they work
    const key = e.key
    
    if (key === ' ' || key === 'Spacebar') {
      // Ensure space key works
      return true
    }
    
    if (key === 'Enter') {
      // Ensure Enter key works for new lines
      return true
    }
    
    if (key === 'Backspace' || key === 'Delete') {
      // Ensure delete keys work
      return true
    }
    
    if (key === 'Tab') {
      // Handle Tab key for accessibility
      return true
    }
    
    if (e.ctrlKey || e.metaKey) {
      // Allow all Ctrl/Cmd shortcuts (copy, paste, etc.)
      return true
    }
    
    // Allow all other keys
    return true
  }, [])

  const handleKeyPress = useCallback(() => {
    // Additional key press handling
    // This event is specifically for character input
    return true
  }, [])

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle key up events
    const textarea = e.target as HTMLTextAreaElement
    onChange(textarea.value)
  }, [onChange])

  const handleInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    // Handle input events for better cross-browser compatibility
    const target = e.target as HTMLTextAreaElement
    onChange(target.value)
  }, [onChange])

  const handlePaste = useCallback(() => {
    // Ensure paste works properly
    setTimeout(() => {
      if (textareaRef.current) {
        onChange(textareaRef.current.value)
      }
    }, 0)
  }, [onChange])

  const handleCompositionStart = useCallback(() => {
    // Handle IME composition start (for international keyboards)
  }, [])

  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    // Handle IME composition end
    const target = e.target as HTMLTextAreaElement
    onChange(target.value)
  }, [onChange])

  useEffect(() => {
    // Sync textarea value with prop
    if (textareaRef.current && textareaRef.current.value !== value) {
      textareaRef.current.value = value
    }
  }, [value])

  useEffect(() => {
    // Focus and keyboard setup
    const textarea = textareaRef.current
    if (textarea) {
      // Ensure textarea is properly configured for all keyboard input
      textarea.setAttribute('inputmode', 'text')
      textarea.setAttribute('enterkeyhint', 'enter')
    }
  }, [])

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      onPaste={handlePaste}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      rows={rows}
      className={className}
      style={{
        resize: 'vertical',
        minHeight: '120px',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
        fontSize: '16px',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
        unicodeBidi: 'plaintext',
        textRendering: 'optimizeLegibility'
      }}
      // Accessibility and input attributes
      spellCheck={true}
      autoComplete="off"
      autoCorrect="on"
      autoCapitalize="sentences"
      dir="auto"
      inputMode="text"
      enterKeyHint="enter"
      // Ensure all browsers handle input properly
      suppressHydrationWarning={true}
    />
  )
}

export default CustomTextarea
