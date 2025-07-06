// JavaScript for MBTI Quiz functionality

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-btn');
  const quizForm = document.getElementById('quiz-form');
  const resultSection = document.getElementById('result');
  const mbtiTypeElement = document.getElementById('mbti-type');
  const mbtiDescriptionElement = document.getElementById('mbti-description');

  // Handle form submission
  submitButton.addEventListener('click', () => {
    const formData = new FormData(quizForm);

    // Calculate MBTI type based on selected answers
    let type = '';
    type += formData.get('q1') === 'E' ? 'E' : 'I';
    type += formData.get('q3') === 'N' ? 'N' : 'S';
    type += formData.get('q6') === 'T' ? 'T' : 'F';
    type += formData.get('q8') === 'J' ? 'J' : 'P';

    if (type.length === 4) {
      // Display MBTI type and description
      mbtiTypeElement.textContent = type;
      mbtiDescriptionElement.textContent = getDescription(type);
      resultSection.classList.remove('hidden');
      window.scrollTo({ top: resultSection.offsetTop, behavior: 'smooth' }); // Scroll to result section
    } else {
      alert('모든 질문에 답변해주세요.');
    }
  });

  // Function to get MBTI description
  function getDescription(type) {
    const descriptions = {
      'INTJ': '전략적인 사고를 가진 분석가입니다.',
      'ENTP': '창의적이고 에너지 넘치는 혁신가입니다.',
      'INFJ': '직관적이며 감정적인 조언자입니다.',
      'ENFP': '열정적이고 독창적인 활동가입니다.',
      'ISTJ': '책임감 있고 현실적인 조직자입니다.',
      'ESTJ': '결단력 있고 실용적인 관리자입니다.',
      'ISFJ': '헌신적이고 신뢰할 수 있는 보호자입니다.',
      'ESFJ': '사교적이고 따뜻한 돌보미입니다.',
      'ISTP': '논리적이고 문제 해결 능력이 뛰어난 장인입니다.',
      'ESTP': '실용적이고 행동 중심적인 모험가입니다.',
      'ISFP': '조용하고 창의적이며 섬세한 예술가입니다.',
      'ESFP': '활발하고 친근한 엔터테이너입니다.',
      'INTP': '독립적이고 분석적인 사색가입니다.',
      'ENTJ': '카리스마 넘치고 조직적인 지도자입니다.',
      'INFP': '이상적이고 감정적인 치유자입니다.',
      'ENFJ': '사려 깊고 열정적인 조언자입니다.'
    };

    return descriptions[type] || '유효한 MBTI 유형이 아닙니다.';
  }
});