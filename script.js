function summarizeNotes() {
  const notes = document.getElementById('notesInput').value;

  console.log("User's notes:", notes);

  // For now, show dummy summary
  const dummySummary = "This is a placeholder summary. Real AI will come soon!";
  document.getElementById('summaryOutput').innerText = dummySummary;
}

