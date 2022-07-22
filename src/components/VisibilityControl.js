export const VisibilityControl = ({
  isChecked,
  cleanTask,
  setShowCompleted,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete it?")) {
      cleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />
      </div>
      <label>Show Projects Done</label>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};
