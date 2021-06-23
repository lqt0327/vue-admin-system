import { ElMessage } from 'element-plus'

/**
 * @description 将传入的内容复制到剪切板
 */
function copyHandle(content) {
    let copy = (e) => {
        e.preventDefault()
        e.clipboardData.setData('text/plain', content)
        ElMessage.success('复制成功')
        document.removeEventListener('copy', copy)
    }
    document.addEventListener('copy', copy)
    document.execCommand("Copy");
}

export {
    copyHandle
}