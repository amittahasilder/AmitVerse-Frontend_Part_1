const STORAGE_KEY =
  "amitverse_watchlist";

/* =========================================================
   GET WATCHLIST
========================================================= */

export const getWatchlist = () => {
  try {
    const stored = JSON.parse(
      localStorage.getItem(
        STORAGE_KEY
      ) || "[]"
    );

    return Array.isArray(stored)
      ? stored
      : [];
  } catch (error) {
    console.error(
      "Failed to get watchlist:",
      error
    );

    return [];
  }
};

/* =========================================================
   CHECK ITEM
========================================================= */

export const isInWatchlist = (id) => {
  const watchlist =
    getWatchlist();

  return watchlist.some(
    (item) => item.id === id
  );
};

/* =========================================================
   ADD ITEM
========================================================= */

export const addToWatchlist = (
  item
) => {
  const watchlist =
    getWatchlist();

  const exists = watchlist.some(
    (savedItem) =>
      savedItem.id === item.id
  );

  if (exists) {
    return watchlist;
  }

  const updated = [
    item,
    ...watchlist,
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  window.dispatchEvent(
    new Event(
      "amitverse-watchlist-updated"
    )
  );

  return updated;
};

/* =========================================================
   REMOVE ITEM
========================================================= */

export const removeFromWatchlist = (
  id
) => {
  const watchlist =
    getWatchlist();

  const updated =
    watchlist.filter(
      (item) => item.id !== id
    );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );

  window.dispatchEvent(
    new Event(
      "amitverse-watchlist-updated"
    )
  );

  return updated;
};

/* =========================================================
   TOGGLE
========================================================= */

export const toggleWatchlist = (
  item
) => {
  if (isInWatchlist(item.id)) {
    return removeFromWatchlist(
      item.id
    );
  }

  return addToWatchlist(item);
};