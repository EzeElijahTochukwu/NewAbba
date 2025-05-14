fetch('/api/version')
  .then(res => res.json())
  .then(data => {
    if (data.version !== EXPECTED_VERSION) {
      alert('This system is not updated. Please contact your centre admin.');
    }
});
